  
import React from 'react';
import { Link } from 'react-router-dom';
import Form from '../Form/Form';
import Logo from '../Logo/Logo';

export default function AuthForm(props){
    return(
        <>
        
        <section className="auth">
            <Logo classNamelogo='auth__logo'/>    
            <h2 className='auth__title'>{props.title}</h2>
               
            <Form classNameButton={props.classNameButton} name={props.name} submitButtonText={props.submitButtonText} className={props.className}>
                {props.children}
            </Form>
            <span className="auth__quest">{props.loginText}
                <Link to={props.path} className={`auth__link ${props.classNameLink}`}>
                    {props.loginLink}
                </Link>
            </span>
        </section>
        </>
    )
    
}
