import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import image from '../../images/movie.png';
import image1 from '../../images/movie1.png';
import image2 from '../../images/movie2.png';
import image3 from '../../images/movie3.png';
import image4 from '../../images/movie4.png';
import image5 from '../../images/movie5.png';
import image6 from '../../images/movie6.png';
import image7 from '../../images/movie7.png';
import image8 from '../../images/movie8.png';
import image9 from '../../images/movie9.png';
import image10 from '../../images/movie10.png';
import image11 from '../../images/movie11.png';

export default function MovieCardList(){
    const movies = [
        {
            link: image,
            title: '33 слова о дизайне',
            time: '1ч 17м'
        }, 
        {
            link: image1,
            title: 'Киноальманах «100 лет дизайна»',
            time: '1ч 17м'
        }, 
        {
            link: image2,
            title: 'В погоне за Бенкси',
            time: '1ч 17м'
        }, 
        {
            link: image3,
            title: 'Баския: Взрыв реальности',
            time: '1ч 17м'
        }, 
        {
            link: image4,
            title: 'Бег это свобода',
            time: '1ч 17м'
        }, 
        {
            link: image5,
            title: 'Книготорговцы',
            time: '1ч 17м'
        }, 
        {
            link: image6,
            title: 'Когда я думаю о Германии ночью',
            time: '1ч 17м'
        },
        {
            link: image7,
            title: 'Gimme Danger: История Игги и The Stooges',
            time: '1ч 17м'
        }, 
        {
            link: image8,
            title: 'Дженис: Маленькая девочка грустит',
            time: '1ч 17м'
        }, 
        {
            link: image9,
            title: 'Соберись перед прыжком',
            time: '1ч 17м'
        }, 
        {
            link: image10,
            title: 'Пи Джей Харви: A dog called money',
            time: '1ч 17м'
        }, 
        {
            link: image11,
            title: 'По волнам: Искусство звука в кино',
            time: '1ч 17м'
        }
    ];

    return(
        <ul className="movie__list-item container">
            {movies.map((movie, index) => (
                <MovieCard 
                    key={index} 
                    link={movie.link} 
                    title={movie.title} 
                    time={movie.time} 
                    saveMovieButtonClassName='movie__savebutton' 
                    buttonTitle='Сохранить' 
                />
            ))}
        </ul>
    )
}
