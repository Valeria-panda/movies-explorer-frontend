import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import Form from '../Form/Form';
export default function Profile(){
  const userName = 'Лера';

  return (
    <>
      <Header>
        <NavBar />
      </Header>
      <section className="profile">
        <h2 className="profile__title">Привет, {userName}!</h2>
        <Form name="profiele" submitButtonText="Редактировать" className="form-profile" classNameButton="profile-form__button" >
            <div className="form__input-container">
              <label className="form__label form__label_section_profile" htmlFor="name">Имя</label>
              <input className="form__input form__input_section_profile" id="name" defaultValue="Лера" required />
            </div>
            <div className="form__input-container">
              <label className="form__label form__label_section_profile" htmlFor="email">Почта</label>
              <input type="email" className="form__input form__input_section_profile" id="email" defaultValue="panda.lera@mail.ru" required />
            </div>
        </Form>
        <Link to="/signin" className="profile__exit">Выйти из аккаунта</Link>
      </section>
    </>
  );
};

