import React, { useState, useEffect } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import Button from '../Button/Button';
import Preloader from '../Preloader/Preloader';
import {
  moviesCountS, moviesCountM, moviesCountL,
  moviesCountMoreS, moviesCountMoreL,
} from '../../utils/constants';

export default function MovieCardList({
  movies, isLoading = false, saveMovie = () => {}, removeMovie, savedMoviesIds,
}){
  const [moviesCount, setMoviesCount] = useState(0);
  const [MoviesMoreCount, setMoviesMoreCount] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const location = window.location.pathname;

  let resizeTimeout = null;

  const updateWindowWidth = () => {
    if (resizeTimeout) {
      clearTimeout(resizeTimeout);
    }
    resizeTimeout = setTimeout(() => setWindowWidth(window.innerWidth), 1000);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWindowWidth);

    return () => window.removeEventListener('resize', updateWindowWidth);
  });

  useEffect(() => {
    if (location === '/movies') {
      if (windowWidth <= 480) {
        setMoviesCount(moviesCountS);
        setMoviesMoreCount(moviesCountMoreS);
      } else if (windowWidth <= 768) {
        setMoviesCount(moviesCountM);
        setMoviesMoreCount(moviesCountMoreS);
      } else {
        setMoviesCount(moviesCountL);
        setMoviesMoreCount(moviesCountMoreL);
      }
    } else {
      setMoviesCount(movies.length);
    }
  }, [windowWidth, location, movies.length]);

  function handleMoreClick() {
    setMoviesCount(moviesCount + MoviesMoreCount);
  }

  return(
    <>
      <ul className="movie__list-item movie__container">
        {isLoading && <Preloader />}
        {(!isLoading && movies.length === 0) && <p className="movies__error">Ничего не найдено</p>}
        {(!isLoading && movies)
          && movies.reduce((moviesToRender, movie) => {
              if (moviesToRender.length < moviesCount) {
                moviesToRender.push(
                  <MovieCard
                    movie={movie}
                    key={movie.movieId}
                    onSave={saveMovie}
                    onRemove={removeMovie}
                    savedMoviesIds={savedMoviesIds}
                  />,
                );
              }
              return moviesToRender;
            }, [])
          }
        </ul>
      <div className="movie__container">
        {
          (!isLoading && movies.length > moviesCount)
            && <Button onClick={handleMoreClick} className="movies__button">Еще</Button>
        }
      </div>
    </>
  )
}
