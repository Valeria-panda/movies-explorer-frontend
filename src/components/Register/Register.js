import React from 'react';
import AuthForm from '../AuthForm/AuthForm';

export default function Register(){
    return(
        <>
            <AuthForm
                formName="register"
                title="Добро пожаловать!" 
                className="form-register" 
                classNameButton="login-form__button" 
                loginText="Уже зарегистрированы?"
                loginLink="Войти"
                path="/signin"
                submitButtonText="Зарегистрироваться"
            >
            <label htmlFor="name" className="form__label">Имя</label>
            <input id="name" className="form__input" required minLength={2} maxLength={30} defaultValue="Лера" name='name'/>
            <label htmlFor="email" className="form__label">Email</label>
            <input id="email" type="email" className="form__input" name='email' required defaultValue="panda.lera@mail.ru"/>
            <label htmlFor="password" className="form__label">Password</label>
            <input id="password" type="password" className="form__input form__input_with_error" name='password' required/>
            <span className="form__error">Что-то пошло не так</span>
        </AuthForm>
       </>
    )
}


