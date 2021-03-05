import React from 'react';

export default function MovieCard({ movie, removeMovie = false }){
    const { image, title, time, isSaved } = movie;
    return(
        <li className="movie__item">
            <img className="movie__item-img"src={image} alt={title} />
            <div className="movie__text">
                <h5 className="movie__text-title">{title}</h5>
                <p className="movie__text-time">{time}</p>
            </div>
            {!isSaved && <button className="movie__button movie__button_type_save">Cохранить</button>}
            {(isSaved && removeMovie) && <button className="movie__button movie__button_type_remove" />}
            {(isSaved && !removeMovie) && <span className="movie__button movie__saved-icon" />}
        </li>
    )
}
