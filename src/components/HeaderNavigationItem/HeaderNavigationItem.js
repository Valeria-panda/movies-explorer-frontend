import React from 'react';
import { NavLink } from 'react-router-dom';

// элемент в основной хедер
export default function HeaderNavigationItem(props) {
  return (
    <NavLink to={props.path} className={`header__link ${props.className}`}>{props.title}
      {props.children}
    </NavLink>
  );
}
