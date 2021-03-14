import React from 'react';
import { Link } from 'react-router-dom';

export default function AuthForm({ onSubmit, handleClick, formName, className, children, 
    classNameButton, submitButtonText, classNameLink,  path,
    loginText, loginLink, data = null, isValid,  onLinkClick = () => {}, }) {

        function handleSubmit(evt) {
            evt.preventDefault();
            onSubmit(data);
        };

    return(
        <section className="auth">
               
            <form 
                name={formName} 
                className={`form ${className}`}
                onSubmit={handleSubmit}
            >
                {children}
                <button onClick={handleClick} type="submit" className={`form__button ${classNameButton} ${!isValid && 'form__button_type_inactive'}`}>
                    {submitButtonText}
                </button>
            
                <span className="auth__quest">{loginText}
                    <Link to={path} onClick={onLinkClick} className={`auth__link ${classNameLink}`}>
                        {loginLink}
                    </Link>
                </span>
            </form>
        </section>
    )
}

