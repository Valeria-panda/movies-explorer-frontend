import React from 'react';
import avatar from '../../images/portfolio.png';
import Section from '../Section/Section';

export default function AboutMe(){
    return(
        <section id="student" className="about-student about-student__container">
             <Section title='Студент' />
                <div className="card">
                    <div className="card__info">
                        <h5 className="card__title">Валерия</h5>
                        <p className="card__subtitle">Фронтенд-разработчик, 25 лет</p>
                        <p className="card__text">Я родилась и живу в Уфе, по образованию инженер-технолог нефтегаовых производств.
                        Занимаюсь фотографией и скалолазанием. Учусь программированию</p>
                        <div>
                            <a className="card__link" href="https://www.facebook.com/">Facebook</a>
                            <a className="card__link" href="https://github.com/Valeria-panda/">Github</a>
                        </div>
                    </div>
                    <div className="card__photo-container">
                        <img className="card__photo" src={avatar} alt="фотография студента" />
                    </div>
                </div>
        </section>
    )
}
