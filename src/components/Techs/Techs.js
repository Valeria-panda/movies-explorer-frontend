import React from 'react';
import Section from '../Section/Section';
import Tech from '../Tech/Tech';

export default function Techs() {
  const techs = ['HTML', 'CSS', 'JS', 'React', 'Git', 'Express.js', 'mongoDB'];

  return(
    <section id="technology" className="technology container">
      <Section title='Технологии' />
      <h5 className="technology__title">7 технологий</h5>
      <p className="technology__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <ul className="technology__list">
        {techs.map((tech, index) => (
          <Tech key={index} tech={tech} />
        ))}
      </ul>
    </section>
  )
}
