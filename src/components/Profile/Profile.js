import React from 'react';
import {CurrentUserContext} from '../../contexts/CurrentUserContext.js';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import AuthForm from '../AuthForm/AuthForm';
import useFormWithValidation from '../../hooks/useFormWithValidation';

export default function Profile({updProfile, signOut}){
  const currentUser  = React.useContext(CurrentUserContext);

  const { values, handleChange, isValid } = useFormWithValidation({ name: currentUser.name, email: currentUser.email });

  const isFormValid = isValid && (values.name !== currentUser.name || values.email !== currentUser.email);

  return (
    <>
      <Header>
        <NavBar />
      </Header>
      <section className="profile">
        <h2 className="profile__title">Привет, {currentUser.name}!</h2>
        <AuthForm
          name="profiele"
          submitButtonText="Редактировать"
          className="form-profile"
          classNameButton="profile-form__button"
          path='/signin'
          loginLink="Выйти из аккаунта"
          classNameLink='profile__exit'
          onSubmit={updProfile}
          data={values}
          onLinkClick={signOut}
          isValid={isFormValid}
        >
          <div className="form__input-container">
            <label className="form__label form__label_section_profile" htmlFor="name">Имя</label>
            <input name="name" className="form__input form__input_section_profile" id="name" value={values.name} onChange={handleChange} required />
          </div>
          <div className="form__input-container">
            <label className="form__label form__label_section_profile" htmlFor="email">Почта</label>
            <input name="email" type="email" className="form__input form__input_section_profile" id="email" value={values.email} onChange={handleChange} required />
          </div>
        </AuthForm>
      </section>
    </>
  );
};

