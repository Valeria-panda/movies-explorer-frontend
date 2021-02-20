import React from 'react';

export default function Footer(){
    return(
        <footer className="footer container">
            <h5 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h5>
            <div className="footer__container">
                <div className="footer__copyright">&copy;{(new Date().getFullYear())}</div>
                <ul className="footer__list">
                    <li className="footer__item">
                        <a className="footer__item-link" href='https://praktikum.yandex.ru/'>Яндекс.Практикум</a>
                    </li>
                    <li className="footer__item">
                        <a className="footer__item-link" href="https://github.com/Valeria-panda/">Github</a>
                    </li>
                    <li className="footer__item">
                        <a className="footer__item-link" href="https://www.facebook.com/">Facebook</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}