import React from 'react';


export default function Portfolio(){
    return(
        <div className="about-student__portfolio container">
            <h5 className="portfolio__title">Портфолио</h5>
            <ul className="portfolio__list">
                <li className="portfolio__item">
                    <a className="portfolio__item-link" href="#">Статичный сайт</a>
                    <a className="portfolio__arrow" href="#"></a>
                </li>
                <li className="portfolio__item">
                    <a className="portfolio__item-link" href="#">Адаптивный сайт</a>
                    <a className="portfolio__arrow" href="#"></a>
                </li>
                <li className="portfolio__item">
                    <a className="portfolio__item-link" href="#">Одностраничное приложение</a>
                    <a className="portfolio__arrow" href="#"></a>
                </li>
            </ul>
        </div>
    )
}