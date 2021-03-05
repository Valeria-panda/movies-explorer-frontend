import React from 'react';
import Button from '../Button/Button';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'

export default function SearchForm(props) {

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form name={props.name} className='search-form container' noValidate onSubmit={handleSubmit}>
      <div className="search-form__main-fieldset">
        <input name="search-text" id="search-text" className="search-form__text" placeholder="Фильм" type="text" required />
        <Button className="search-form__button" type="submit" disabled/>
      </div>
      <div className="search-form__filters">
        <FilterCheckbox name="short-films" text="Короткометражки" />
      </div>
    </form>
  )
};