import React from 'react';
import {CurrentUserContext} from '../../contexts/CurrentUserContext.js';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import AuthForm from '../AuthForm/AuthForm';

export default function Profile({updProfile, signOut}){
    
    const currentUser  = React.useContext(CurrentUserContext);

    const [viewMode, setViewMode] = React.useState(true);
    
    function handleSignOut() {
      signOut();
    }

    function handleSubmit(evt) {
      evt.preventDefault();
      updProfile();
    }
    
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
          onSubmit={handleSubmit}
          noValidate
          handleClick={handleSignOut}
        >
            <div className="form__input-container">
              <label className="form__label form__label_section_profile" htmlFor="name">Имя</label>
              <input disabled={viewMode} className="form__input form__input_section_profile" id="name" value={currentUser.name} required />
            </div>
            <div className="form__input-container">
              <label className="form__label form__label_section_profile" htmlFor="email">Почта</label>
              <input disabled={viewMode} type="email" className="form__input form__input_section_profile" id="email" value={currentUser.email} required />
            </div>
        </AuthForm>
      </section>
    </>
  );
};

