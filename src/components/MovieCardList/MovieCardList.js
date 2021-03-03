import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import Button from '../Button/Button';

export default function MovieCardList({ movies, removeMovie}){
    return(
        <>
        <ul className="movie__list-item movie__container">
            {movies.map((movie, index) => (
                <MovieCard 
                    movie={movie} 
                    key={index} 
                    removeMovie={removeMovie} 
                    buttonTitle='Сохранить'
                    saveMovieButtonClassName='movie__savebutton'
                 />
            ))}
 
        </ul>
        
        <div className="movie__container">
            {
                movies.length > 6 && <Button className="movies__button">Еще</Button>
            }
        </div>
        
        </>
    )
}
