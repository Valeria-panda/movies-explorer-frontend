
import React from 'react';
import AuthForm from '../AuthForm/AuthForm';
import Logo from '../Logo/Logo';
import Section from '../Section/Section';
import useFormWithValidation from '../../hooks/useFormWithValidation';

export default function Login({onLogin}){

  const { values, handleChange, errors, isValid } = useFormWithValidation({ email: '', password: '' });

    return(
        <>
        <AuthForm
            formName="login"
            className="form-login"
            submitButtonText="Войти"
            loginText="Ещё не зарегистрированы?"
            path="/signup"
            loginLink="Регистрация"
            classNameButton="login-form__button"
            data={values}
            onSubmit={onLogin}
            isValid={isValid}
        >
            <Logo classNamelogo='auth__logo'/>
            <Section mod="section_type_auth" sectionTitle="Рады видеть!" sectionTitleMod="section__title_type_auth"></Section>

            <label htmlFor="email" className="form__label">Email</label>
            <input  value={values.email} onChange={handleChange} id="email" type="email" className="form__input" name='email' required defaultValue="panda.lera@mail.ru"/>
            <span className="form__error">{errors.email}</span>
            <label htmlFor="password" className="form__label">Password</label>
            <input value={values.password} onChange={handleChange} id="password" type="password" className="form__input" name='password' required/>
            <span className="form__error">{errors.password}</span>
        </AuthForm>

       </>
    )
}

