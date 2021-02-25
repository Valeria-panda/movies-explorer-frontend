import React from 'react';

export default function FormInput(props){

    return(
        <>
        <label htmlFor={props.htmlFor} className="form__label">
            {props.label}
            <input
                ref={props.emailRef}
                id={props.id}
                type={props.type}
                className="form__input"
                name={props.name}
                value={props.value || ''}
                minLength={props.minLength}
                maxLength={props.maxLength}
                required
                onChange={props.handleChange}
            />
            <span className={`popup__input-error ${!props.valid && 'authorize__form-error_visible'}`}
                        id={props.idError}>
                    {props.error}
            </span>
        </label>
     </>
    )
}

