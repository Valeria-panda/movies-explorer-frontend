import React from 'react';
import AuthForm from '../AuthForm/AuthForm';
import Logo from '../Logo/Logo';
import Section from '../Section/Section';
export default function Register({onRegister}){

    const [formValues, setFormValues] = React.useState({
        userame: '',
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

    function submitRegister(evt) {
        evt.preventDefault();
        onRegister(formValues);
    }

    return(
        <AuthForm
            formName="register"
            className="form-register" 
            classNameButton="login-form__button" 
            loginText="Уже зарегистрированы?"
            loginLink="Войти"
            path="/signin"
            submitButtonText="Зарегистрироваться"
            handleSubmit={submitRegister}
        >

            <Logo classNamelogo='auth__logo'/> 
            <Section mod="section_type_auth" sectionTitle="Добро пожаловать!" sectionTitleMod="section__title_type_auth" />
              
            <label htmlFor="name" className="form__label">Имя</label>
            <input onChange={handleChange} id="name" className="form__input" required minLength={2} maxLength={30} defaultValue="Лера" name='name'/>
            <label htmlFor="email" className="form__label">Email</label>
            <input onChange={handleChange} id="email" type="email" className="form__input" name='email' required defaultValue="panda.lera@mail.ru"/>
            <label htmlFor="password" className="form__label">Password</label>
            <input onChange={handleChange} id="password" type="password" className="form__input form__input_with_error" name='password' required/>
            <span className="form__error">Что-то пошло не так</span>
        </AuthForm>
       
    )
}


