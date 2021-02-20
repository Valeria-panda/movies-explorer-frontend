  
import React, { useState } from 'react';
import Form from '../Form/Form';

function Profile(props){

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
   
    function handleChange(evt) {
      const { value } = evt.target;
      evt.target.name === 'email'
        ? setEmail(value)
        : setUsername(value);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        if (!email && !username) return;
        handleSubmit(username, email);
        setEmail('');
        setUsername('');
    }

    return(
       <Form 
        formName="Profile"
        title="Привет"
        formId="Profile" 
        className="form-profile" 
        classNameButton="profile-form__button" 
        loginLink="Выйти из аккаунта"
        classNameLink = "form__link_type_update" 
        path="/updateProfile"
        submitButtonText="Редактировать"
        onSubmit={handleSubmit}
       >

        <label htmlFor="username" className="form__label">          
            Имя<input
                id="username"
                type="text"
                className="form__input"
                name='username'
                value={username || ''}
                minLength='6'
                maxLength='40'
                required
                onChange={handleChange}
            />
        </label>

        <label htmlFor="email" className="form__label">
            Email<input
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
        </label>

       </Form>
    )
}

export default Profile;