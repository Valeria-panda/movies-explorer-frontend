import React from 'react';
import AuthForm from '../AuthForm/AuthForm';
import Logo from '../Logo/Logo';
import Section from '../Section/Section';
import useFormWithValidation from '../../hooks/useFormWithValidation';

export default function Register({onRegister}){

    const {
        values, handleChange, errors, isValid,
      } = useFormWithValidation({ name: '', email: '', password: '' });
    
    //   const handleFocus = (evt) => {
    //     evt.target.removeAttribute('readonly');
    //   };

    return(
        <AuthForm
            formName="register"
            className="form-register" 
            classNameButton="login-form__button" 
            loginText="Уже зарегистрированы?"
            loginLink="Войти"
            path="/signin"
            submitButtonText="Зарегистрироваться"
            data={values}
            onSubmit={onRegister}
            isValid={isValid}
        >

            <Logo classNamelogo='auth__logo'/> 
            <Section mod="section_type_auth" sectionTitle="Добро пожаловать!" sectionTitleMod="section__title_type_auth" />
              
            <label htmlFor="name" className="form__label">Имя</label>
            <input value={values.name} onChange={handleChange} id="name" className="form__input" required minLength={2} maxLength={30} defaultValue="Лера" name='name'/>
            <span className="form__error">{errors.name}</span>
            <label htmlFor="email" className="form__label">Email</label>
            <input value={values.email} onChange={handleChange} id="email" type="email" className="form__input" name='email' required defaultValue="panda.lera@mail.ru"/>
            <span className="form__error">{errors.email}</span>
            <label htmlFor="password" className="form__label">Password</label>
            <input value={values.password} onChange={handleChange} id="password" type="password" className="form__input form__input_with_error" name='password' required/>
            <span className="form__error">{errors.password}</span>
        </AuthForm>
       
    )
}


