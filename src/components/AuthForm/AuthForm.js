import React from 'react';
import { Link } from 'react-router-dom';

export default function AuthForm({handleSubmit, handleClick, formName, className, children, 
    classNameButton, submitButtonText, classNameLink,  path,
    loginText, loginLink }){


    return(
        <section className="auth">
               
            <form 
                name={formName} 
                className={`form ${className}`}
                onSubmit={handleSubmit}
            >
                {children}
                <button onClick={handleClick} type="submit" className={`form__button ${classNameButton}`}>
                    {submitButtonText}
                </button>
            
                <span className="auth__quest">{loginText}
                    <Link to={path} className={`auth__link ${classNameLink}`}>
                        {loginLink}
                    </Link>
                </span>
            </form>
        </section>
    )
}

