import React from 'react';
import avatar from '../../images/portfolio.png';
import SectionHeader from '../SectionHeader/SectionHeader';

export default function AboutMe(){
    return(
        <section id="student" className="about-student container">
             <SectionHeader title='Студент' />
                <div className="card">
                    <div className="card__info">
                        <h5 className="card__title">Виталий</h5>
                        <p className="card__subtitle">Фронтенд-разработчик, 30 лет</p>
                        <p className="card__text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
                            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в 
                            компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами 
                            и ушёл с постоянной работы.</p>
                        <div>
                            <a className="card__link" href="https://www.facebook.com/">Facebook</a>
                            <a className="card__link" href="https://github.com/Valeria-panda/">Github</a>
                        </div>
                    </div>
                    <div>
                        <img src={avatar} alt="фотография студента" />
                    </div>
                </div>
        </section>
    )
}
