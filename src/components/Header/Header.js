import React from 'react';
import Logo from '../Logo/Logo';

export default function Header(props) {
  return (
    <header className={`header ${props.className}`}>
      <Logo />
      <div className="header__panel">
          {props.children}
      </div>
    </header>
  );
}
