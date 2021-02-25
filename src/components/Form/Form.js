import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';

export default function Form(props){
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [userError, setUserError] = useState('');
    const [emailValid, setEmailValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);
    const [userValid, setUserValid] = useState(false);
    const emailRef = useRef();
    const passwordRef = useRef();
    const userRef = useRef();

    function validate() {
        setEmailError(emailRef.current.validationMessage);
        setPasswordError(passwordRef.current.validationMessage);
        setUserError(userRef.current.validationMessage);
        !emailRef.current.validity.valid ? setEmailValid(false) : setEmailValid(true);
        !passwordRef.current.validity.valid ? setPasswordValid(false) : setPasswordValid(true);
        !userRef.current.validity.valid ? setUserValid(false) : setUserValid(true);
    }

    function handleChange(evt) {
      const { value } = evt.target;
      if(evt.target.name === 'email'){
         setEmail(value) 
      }
      if(evt.target.name === 'password'){
        setPassword(value);
     }
     if(evt.target.name === 'user'){
        setUser(value);
     }
     validate();
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        if (!email && !password && !user) return;
        props.onSubmit(user, password, email);
        setEmail('');
        setPassword('');
        setUser('');
    }
        return(
            <>       
                <form
                    name={props.formName}
                    id={props.formId}
                    onSubmit={handleSubmit}
                    className={`form ${props.className}`}
                >
                    <Logo />
                    <h2 className='form__title'>{props.title}</h2>
                    {props.isRegister && (
                        <label htmlFor="user" className="form__label">
                            Имя<input
                                ref={userRef}
                                id="user"
                                type="text"
                                className="form__input"
                                name='user'
                                value={user || ''}
                                minLength='6'
                                maxLength='40'
                                required
                                onChange={handleChange}
                            />
                            <span className={`popup__input-error ${!userValid &&'authorize__form-error_visible'}`}
                                        id='user-error'>
                                    {userError}
                            </span>
                        </label>
                    )}

                    <label htmlFor="email" className="form__label">
                        Email<input
                            ref={emailRef}
                            id="email"
                            type="email"
                            className="form__input"
                            name='email'
                            value={email || ''}
                            minLength='6'
                            maxLength='40'
                            required
                            onChange={handleChange}
                        />
                        <span className={`popup__input-error ${!emailValid && 'authorize__form-error_visible'}`}
                                    id='password-error'>
                                {emailError}
                        </span>
                    </label>

                    <label htmlFor="password" className="form__label">
                        Пароль<input
                            ref={passwordRef}
                            id="password"
                            type="password"
                            className="form__input"
                            name='password'
                            value={password || ''}
                            minLength='8'
                            maxLength='30'
                            required
                            onChange={handleChange}
                        />
                        <span className={`popup__input-error ${!passwordValid && 'authorize__form-error_visible'}`}
                                    id='password-error'>
                                {passwordError}
                        </span>
                    </label>

                    {props.children}
                    
                    <button type="submit" className={`form__button ${props.classNameButton}`}>
                        {props.submitButtonText}
                    </button>

                    <span className="form__quest">{props.loginText}
                        <Link to={props.path} className={`form__link ${props.classNameLink}`}>
                            {props.loginLink}
                        </Link>
                    </span>
                </form>
            </>
        )
}