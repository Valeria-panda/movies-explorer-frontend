import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import * as api from '../../utils/MainApi';
import * as moviesApi from '../../utils/MoviesApi';
import { successMessage, fetchErrorMessage } from '../../utils/constants';
import { searchMovie, toFormatMovie } from '../../utils/utils';
import resolveImg from '../../images/resolve.svg';
import rejectImg from '../../images/reject.svg';

export default function App(){
  const history = useHistory();

  //стейт данных юзера
  const [isTokenChecked, setIsTokenChecked] = useState(false);
  const [token, setToken] = useState('');
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //стейт состояния запроса
  const [isLoading, setIsLoading] = useState(false);
  const [isFetched, setIsFetched] = useState(false);

  //стейт информационного попапа
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [image, setImage] = useState('');

  //стейт фильмов
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [savedMoviesIds, setSavedMoviesIds] = useState([]);
  const [searchedSavedMovies, setSearchedSavedMovies] = useState([]);

  //показ ошибки запроса
  const showError = (msg) => {
    setMessage(msg);
    setImage(rejectImg);
    setIsInfoTooltipOpen(true);
  };

  //показ успешного запроса
  const showSuccess = () => {
    setMessage(successMessage);
    setImage(resolveImg);
    setIsInfoTooltipOpen(true);
  };

  //проверка токена
  useEffect(() => {
    const jwt = localStorage.getItem('token');

    if (jwt) {
      setToken(jwt);

      api.getUserData(jwt)
        .then((res) => {
          setCurrentUser(res);
          setIsLoggedIn(true);
        })
        .catch((err) => {
          console.log(err);
          localStorage.removeItem('token')
        });
    }
    setIsTokenChecked(true);
  }, [])

  //регистрация
  function onRegister({name, email, password}) {
    if (!name || !email || !password) {
      return;
    }
    api.register({name, email, password})
      .then((res) => {
        if (res) {
          login({email, password});
        }
      })
      .catch(err => {
        showError(err.message);
      });
  }

  //авторизация
  function login({email, password}) {
    api.login({email, password})
    .then((res) => {
      localStorage.setItem('token', res.token);

      setToken(res.token);
      setIsLoggedIn(true);
      setCurrentUser({ name: res.name, email: res.email });

      history.push('/movies');
    })
    .catch(err => {
      showError(err.message);
    });
  }

  function onLogin({email, password}) {
    if (!email || !password) {
      return;
    }
    login({email, password});
  }

  /* редактирование профиля */
  function updProfile(data) {
    api.updateProfile(data, token)
      .then((res) => {
        setCurrentUser(res);
        showSuccess();
      })
      .catch(err => {
        showError(err.message);
      });
  }

  //выход
  function signOut() {
    setIsLoggedIn(false);
    setCurrentUser({});
    setIsFetched(false);
    setMovies([]);
    localStorage.clear();
    history.push('/');
  }

  //поиск фильмов и сохранение в хранилище
  function searchMovies(keyword, isIncludesShort) {
    setIsFetched(true);
    setIsLoading(true);
    let localMovies = localStorage.getItem('movies');

    if (!localMovies) {
      moviesApi.getMovies()
        .then((res) => {
          const formattedMovies = toFormatMovie(res, moviesApi.BASE_URL);

          localStorage.setItem('movies', JSON.stringify(formattedMovies));
          localMovies = formattedMovies;

          const filteredMovies = searchMovie(localMovies, keyword, isIncludesShort);
          setMovies(filteredMovies);
          localStorage.setItem('searchedMovies', JSON.stringify(filteredMovies));
        })
        .catch(err => {
          showError(fetchErrorMessage);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      localMovies = JSON.parse(localMovies);

      const filteredMovies = searchMovie(localMovies, keyword, isIncludesShort);
      setMovies(filteredMovies);
      localStorage.setItem('searchedMovies', JSON.stringify(filteredMovies));
      setIsLoading(false);
    }
  }

  //установка найденных последними фильмов в стейт
  useEffect(() => {
    const localMovies = localStorage.getItem('searchedMovies');

    if (isLoggedIn && localMovies) {
      setIsFetched(true);
      setMovies(JSON.parse(localMovies));
    }
  }, [isLoggedIn]);

  //получение сохраненных юзером фильмов
  useEffect(() => {
    function getSavedMovies() {
      api.getMovies(token)
        .then((res) => {
          const savedMoviesIds = res.map((movie) => movie.movieId);

          setSavedMovies(res);
          setSavedMoviesIds(savedMoviesIds);
          setSearchedSavedMovies(res);
        })
        .catch(err => {
          showError(err.message);
        });
    }

    if (isLoggedIn) {
      getSavedMovies();
    }
  }, [isLoggedIn, token]);

  //поиск по сохраненным
  function searchSavedMovies(keyword, isIncludesShort) {
    const filteredSavedMovies = searchMovie(savedMovies, keyword, isIncludesShort);

    setSearchedSavedMovies(filteredSavedMovies);
  };

  //сохранение
  function saveMovie(data) {
    api.saveMovie(data, token)
      .then((res) => {
        setSavedMovies([...savedMovies, res]);
        setSavedMoviesIds([...savedMoviesIds, res.movieId]);
        setSearchedSavedMovies([...savedMovies, res]);
      })
      .catch(err => {
        showError(err.message);
      });
  }

  //удаление
  function removeMovie(movieId) {
    api.removeMovie(movieId, token)
      .then((res) => {
        console.log(res)
        const filteredMovies = savedMovies.filter((movie) => movie.movieId !== res.movieId);
        const filteredMoviesIds = savedMoviesIds.filter((id) => id !== res.movieId);

        setSavedMovies(filteredMovies);
        setSavedMoviesIds(filteredMoviesIds);
        setSearchedSavedMovies(filteredMovies);
      })
      .catch(err => {
      showError(err.message);
    });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      {isTokenChecked
        && <Switch>
          <Route exact path='/'>
            <Main isLoggedIn={isLoggedIn} />
          </Route>

          <Route path='/signin'>
            <Login onLogin={onLogin} />
          </Route>

          <Route path='/signup'>
            <Register onRegister={onRegister} />
          </Route>

          <ProtectedRoute
            path='/updateProfile'
            component={Profile}
            isLoggedIn={isLoggedIn}
            updProfile={updProfile}
            signOut={signOut}
          />

          <ProtectedRoute
            path="/movies"
            isLoggedIn={isLoggedIn}
            component={Movies}
            isFetched={isFetched}
            isLoading={isLoading}
            searchMovies={searchMovies}
            movies={movies}
            saveMovie={saveMovie}
            removeMovie={removeMovie}
            savedMoviesIds={savedMoviesIds}
          />

          <ProtectedRoute
            path="/savedmovies"
            isLoggedIn={isLoggedIn}
            component={SavedMovies}
            searchMovies={searchSavedMovies}
            movies={searchedSavedMovies}
            removeMovie={removeMovie}
            savedMoviesIds={savedMoviesIds}
          />

          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      }
      <InfoTooltip
        image={image}
        message={message}
        isOpen={isInfoTooltipOpen}
        setIsOpen={setIsInfoTooltipOpen}
      />
    </CurrentUserContext.Provider>
  )
}

