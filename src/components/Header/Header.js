import React from 'react';
import Logo from '../Logo/Logo';

export default function Header(props) {
  return (
    <header className={`header ${props.className}`}>
      <Logo />
        {props.children}
    </header>
  );
}
