
import React from 'react';
import { Link } from 'react-router-dom';

export default function NavTab(){
    return(
        <ul className="main__section">
            <li className="section__item">
                <Link to="/" className="section__link" href="#">О проекте</Link>
            </li>
            <li className="section__item">
                <Link to="/" className="section__link" href="#">Технологии</Link>
            </li>
            <li className="section__item">
                <Link to="/" className="section__link" href="#">Студент</Link>
            </li>
        </ul>
    )
}

 






