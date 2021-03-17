import React from 'react';
import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import MovieCardList from '../MovieCardList/MovieCardList';

export default function SavedMovies({
  movies, searchMovies, removeMovie, savedMoviesIds, isLoading,
}){
  return(
    <>
      <Header>
        <NavBar/>
      </Header>
      <SearchForm name='searchform' searchMovies={searchMovies} />
      <MovieCardList
        movies={movies}
        isLoading={isLoading}
        removeMovie={removeMovie}
        savedMoviesIds={savedMoviesIds}
      />
      <Footer />
    </>
  )
}
