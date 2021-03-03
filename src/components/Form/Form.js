import React from 'react';

export default function Form(props){
    return(      
        <form name={props.formName} className={`form ${props.className}`}>
            {props.children}

            <button className={`form__button ${props.classNameButton}`}>
                {props.submitButtonText}
            </button>
        </form>
    )
}