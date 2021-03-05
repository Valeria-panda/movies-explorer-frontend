  
import React from 'react';
import AuthForm from '../AuthForm/AuthForm';

export default function Login(){
    return(
        <>
        <AuthForm
            formName="login"
            className="form-login" 
            title="Рады видеть!"
            submitButtonText="Войти"
            loginText="Ещё не зарегистрированы?"
            path="/signup"
            loginLink="Регистрация"
            classNameButton="login-form__button" 
        >
            <label htmlFor="email" className="form__label">Email</label>
            <input id="email" type="email" className="form__input" name='email' required defaultValue="panda.lera@mail.ru"/>
            <label htmlFor="password" className="form__label">Password</label>
            <input id="password" type="password" className="form__input" name='password' required/>
        </AuthForm>
        
       </>
    )
}

