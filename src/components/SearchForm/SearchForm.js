import React from 'react';
import Button from '../Button/Button';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'

export default function SearchForm({ name, searchMovies }) {
  const [value, setValue] = React.useState('');
  const [includesShort, setIncludesShort] = React.useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleCheckboxChange = (includesShort) => {
    searchMovies(value, includesShort);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    searchMovies(value, includesShort);
    }

  return (
    <form name={name} className='search-form container' onSubmit={handleSubmit}>
      <div className="search-form__main-fieldset">
        <input value={value} onChange={handleChange} name="search-text" id="search-text" className="search-form__text" placeholder="Фильм" type="text" required />
        <Button className="search-form__button" type="submit" />
      </div>
      <div className="search-form__filters">
        <FilterCheckbox setIncludesShort={setIncludesShort} onCheckboxChange={handleCheckboxChange} name="short-films" text="Короткометражки" />
      </div>
    </form>
  )
};
