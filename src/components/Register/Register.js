import React from 'react';
import Form from '../Form/Form';

export default function Register(props){

    function submitForm(user, password, email) {
        props.onRegister(user, password, email);
    }
    
    return(
       <Form 
            isRegister={true}
            formName="register"
            title="Добро пожаловать!" 
            formId="register" 
            className="form-register" 
            classNameButton="login-form__button" 
            loginText="Уже зарегистрированы?"
            loginLink="Войти"
            path="/signin"
            submitButtonText="Зарегистрироваться"
            onSubmit={submitForm}
       />
    )
}
