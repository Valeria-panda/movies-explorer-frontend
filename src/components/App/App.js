import React from 'react';
import { Route, Switch, useHistory, useLocation} from 'react-router-dom';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import { api } from '../utils/MainApi.js';
import Footer from '../Footer/Footer';

export default function App(){

    const [currentUser, setCurrentUser] = React.useState({});
    const [loggedIn, setLoggedIn] = React.useState(false);
    const history = useHistory();
    let location = useLocation();
   
    //проверка токена
    React.useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
        api.checkToken(token)
          .then((res) => {
            if (res) {
              setLoggedIn(true);
              getCurrentUser();
            }
          })
          .catch((err) => {
            console.log(err);
            localStorage.removeItem('token')
            history.push('/');
          });
      }
    }, [])
  
    //регистрация
    function onRegister({name, email, password}) {
      if (!name || !email || !password) {
        return;
      }
      api.register(name, email, password)
        .then((res) => {
          if (res) {
            login(email, password);
          }
        })
        .catch(err => {
          console.log(err);
        })
    }
  
    //авторизация
    function login(email, password) {
      api.login(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem('token', res.token);
          setLoggedIn(true);
          getCurrentUser();
          history.push('/movies');
        }
      })
      .catch(err => {
        console.log(err);
      })
    }
  
    function onLogin({email, password}) {
      if (!email || !password) {
        return;
      }
      login(email, password);
    }
  
    function getCurrentUser() {
      const token = localStorage.getItem('token');
      api.getCurrentUser(token)
        .then((res) => {
          if (res) {
            setCurrentUser(res)
          }
        })
        .catch(err => {
          console.log(err);
        });
    }

    /* редактирование профиля */
    function updProfile() {
        const token = localStorage.getItem('token');
    }

    /* выход */
    function signOut() {
        localStorage.removeItem('token');
        setLoggedIn(false);
        setCurrentUser({})
        history.push('/');
    }

   return(    
    <CurrentUserContext.Provider value={currentUser}>
      
    { (loggedIn || location.pathname === '/') && <Header loggedIn={loggedIn}/> }

    <Switch>
            <Route exact path='/'>
                <Main />
            </Route>
            <Route path='/signin'>
                <Login 
                    onLogin={onLogin}
                />
            </Route>
            <Route path='/signup'>
                <Register 
                    onRegister={onRegister}
                />
            </Route>
            <Route path='/updateProfile'>
                <Profile 
                    updProfile={updProfile} 
                    handleSignOutt={signOut}
                />
            </Route>
            <Route path='/movies'>
                <Movies />
            </Route>
            <Route path='/savedmovies'>
                <SavedMovies />
            </Route>
            <Route path='/notfound'>
                <NotFound />
            </Route>
        </Switch>        
       
        { (loggedIn || location.pathname === '/') && <Footer /> }
      </CurrentUserContext.Provider>
    
   )  
}

