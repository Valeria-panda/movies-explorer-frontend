import React from 'react';

export default function MovieCard(props){
    return(
        <li className="movie__item">
            <img className="movie__item-img" src={props.link}/>
            <div className="movie__text">
                <h5 className="movie__text-title">{props.title}</h5>
                <p className="movie__text-time">{props.time}</p>
            </div>
            <button type="button" className={props.saveMovieButtonClassName}>
                {props.buttonTitle}
            </button>
        </li>
    )
}
