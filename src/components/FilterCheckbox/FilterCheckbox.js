import React from 'react';

export default function FilterCheckbox({ name, text, onCheckboxChange }) {
  const checked = React.useRef();

  function handleChange(e) {
    onCheckboxChange(checked.current.checked);
  }

  return (
    <div className="filter-button__container">
      <input ref={checked} onChange={handleChange} type="checkbox" name={name} id={name} className="filter-button__input"/>
      <label htmlFor={name} className="filter-button__text">{text}</label>
    </div>
  )
}
