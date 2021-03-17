import React from 'react';
import Section from '../Section/Section';

export default function AboutProject(){
  return(
    <section id="project" className="about-project container">
      <Section title='О проекте' />
      <div className="about-project__container">
        <div className="about-project__description">
          <h5 className="about-project__description-title">Дипломный проект включал 5 этапов</h5>
          <p className="about-project__description-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="about-project__description">
          <h5 className="about-project__description-title">На выполнение диплома ушло 5 недель</h5>
          <p className="about-project__description-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="about-project__container">
      <div className="about-project__timeline about-project__timeline_type_short">
        <p className="about-project__timeline-title">1 неделя</p>
        <p className="about-project__timeline-subtitle">Back-end</p>
      </div>
      <div className="about-project__timeline about-project__timeline_type_long">
        <p className="about-project__timeline-title about-project__timeline-title_type_light">4 недели</p>
        <p className="about-project__timeline-subtitle">Front-end</p>
      </div>
      </div>
    </section>
  )
}
