import React from 'react';

export default function FilterCheckbox(props) {
  return (
    <div className="filter-button__container">
      <input type="checkbox" name={props.name} id={props.name} className="filter-button__input"/>
      <label for={props.name} className="filter-button__text">{props.text}</label>
    </div>
  )
}