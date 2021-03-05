  
import React from 'react';
import AuthForm from '../AuthForm/AuthForm';
import Logo from '../Logo/Logo';
import Section from '../Section/Section';

export default function Login({onLogin}){

    const [formValues, setFormValues] = React.useState({
        email: '',
        password: '',
    });

    function handleChange(evt) {
        const { username, value } = evt.target;   
        setFormValues({
          ...formValues,
          [username] : value 
        });
    }

    function submitLogin(evt) {
        evt.preventDefault();
        onLogin(formValues);
    }
    
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
            handleSubmit={submitLogin}
        >
            <Logo classNamelogo='auth__logo'/>  
            <Section mod="section_type_auth" sectionTitle="Рады видеть!" sectionTitleMod="section__title_type_auth"></Section>

            <label htmlFor="email" className="form__label">Email</label>
            <input onChange={handleChange} id="email" type="email" className="form__input" name='email' required defaultValue="panda.lera@mail.ru"/>
            <label htmlFor="password" className="form__label">Password</label>
            <input onChange={handleChange} id="password" type="password" className="form__input" name='password' required/>
        </AuthForm>
        
       </>
    )
}

