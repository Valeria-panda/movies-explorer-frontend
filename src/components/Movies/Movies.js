import React from 'react';
import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header';
import MovieCardList from '../MovieCardList/MovieCardList';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';

export default function Movies({
  isFetched, isLoading, movies, searchMovies, saveMovie, removeMovie, savedMoviesIds,
}){
  return(
    <>
      <Header>
        <NavBar />
      </Header>
      <SearchForm name='searchform' searchMovies={searchMovies} />
      {isFetched
        &&<MovieCardList
          movies={movies}
          isLoading={isLoading}
          saveMovie={saveMovie}
          removeMovie={removeMovie}
          savedMoviesIds={savedMoviesIds}
        />}
      <Footer />
    </>
  )
}


