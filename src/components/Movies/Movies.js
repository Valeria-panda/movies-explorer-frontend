import React from 'react';
import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header';
import MovieCardList from '../MovieCardList/MovieCardList';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';

function addMovies(item) {
    return item.keys().map(item);
}
  
  const movies = addMovies(require.context('../../images/movie', false, /\.(png|jpe?g|svg)$/));
  
  const moviesPaths = movies.map((image) => image.default);
  
  const time = '1ч 17м';
  
    const moviesArray = [
        {
        title: '33 слова о дизайне',
        time,
        isSaved: false,
        },
        {
        title: 'Киноальманах «100 лет дизайна»',
        time,
        isSaved: true,
        },
        {
        title: 'В погоне за Бенкси',
        time,
        isSaved: false,
        },
        {
        title: 'Баския: Взрыв реальности',
        time,
        isSaved: true,
        },
        {
        title: 'Бег это свобода',
        time,
        isSaved: false,
        },
        {
        title: 'Книготорговцы',
        time,
        isSaved: false,
        },
        {
        title: 'Когда я думаю о Германии ночью',
        time,
        isSaved: false,
        },
        {
        title: 'Gimme Danger: История Игги и The Stooges',
        time,
        isSaved: false,
        },
        {
        title: 'Дженис: Маленькая девочка грустит',
        time,
        isSaved: true,
        },
        {
        title: 'Соберись перед прыжком',
        time,
        isSaved: false,
        },
        {
        title: 'Пи Джей Харви: A dog called money',
        time,
        isSaved: false,
        },
        {
        title: 'По волнам: Искусство звука в кино',
        time,
        isSaved: false,
        },
    ];
  
const defaultMovies = moviesArray.map((movie, index) => {
    const newMovie = { ...movie, image: moviesPaths[index] };
    return newMovie;
});
  
export const defaultMoviesShort = defaultMovies.filter((movie) => movie.isSaved === true);

export default function Movies(){

    return(
        <>
            <Header>
                <NavBar />
            </Header>
            <SearchForm name='searchform'/>
            <MovieCardList   movies={defaultMovies}  />
            <Footer />
        </>
    )
}


