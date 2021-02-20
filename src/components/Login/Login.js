  
import React from 'react';
import Form from '../Form/Form';

export default function Login(props){
    
    function submitForm(password, email) {
        props.onLogin(password, email);
    }

    return(
       <Form 
            isRegister={false}
            formName="login"
            title="Рады видеть!" 
            formId="login" 
            className="form-login" 
            classNameButton="login-form__button" 
            loginText="Ещё не зарегистрированы?"
            loginLink="Регистрация"
            path="/signup"
            submitButtonText="Войти"
            onSubmit={submitForm}
       />
    )
}
