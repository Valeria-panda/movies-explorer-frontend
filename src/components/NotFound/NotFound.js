import React from 'react';
import { useHistory } from 'react-router-dom';

export default function NotFound() {
  const history = useHistory();

  function goBack() {
    history.goBack();
  }

  return (
    <section className="not-found">
      <h1 className="not-found__text">404</h1>
      <p className="not-found__description">Страница не найдена</p>
      <button onClick={goBack} className="not-found__back">Назад</button>
    </section>
  );
}
