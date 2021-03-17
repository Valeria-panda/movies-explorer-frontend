import React from 'react';
import { staticSite, adaptiveSite, spa } from '../../utils/constants';

export default function Portfolio(){
  return(
    <div className="about-student__portfolio container">
      <h5 className="portfolio__title">Портфолио</h5>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a className="portfolio__item-link" href={staticSite}>Статичный сайт</a>
          <a className="portfolio__arrow" href={staticSite}>{}</a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__item-link" href={adaptiveSite}>Адаптивный сайт</a>
          <a className="portfolio__arrow" href={adaptiveSite}>{}</a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__item-link" href={spa}>Одностраничное приложение</a>
          <a className="portfolio__arrow" href={spa}>{}</a>
        </li>
      </ul>
    </div>
  )
}
