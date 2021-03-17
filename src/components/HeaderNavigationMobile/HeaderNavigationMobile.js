import React from 'react';
import { NavLink } from 'react-router-dom';
import HeaderNavigationMain from '../HeaderNavigationMain/HeaderNavigationMain';

// хедер основной для зареганных пользователей со страницы фильмы и сохраненные фильмы
export default function HeaderNavigationMobile() {
  return (
    <>
      <div className="headerNavigationMobile">
        <input className="headerNavigationMobile__checkbox" type="checkbox" id="checkbox" />
        <label className="headerNavigationMobile__label" htmlFor="checkbox">
          <span className="headerNavigationMobile__button" />
        </label>
        <div className="headerNavigationMobile__nav-container">
          <HeaderNavigationMain
            mod="headerNavigationMobile__nav"
            navListMod="headerNavigationMobile__nav-list"
            navListItemMod="headerNavigationMobile__nav-list-item"
            navLinkMod="headerNavigationMobile__nav-link"
            navLinkProfile="headerNavigationMobile__nav-link_profile"
          >
            <li className="header__item headerNavigationMobile__nav-list-item">
              <NavLink exact to="/" className="header__link headerNavigationMobile__nav-link" activeClassName="headerNavigationMobile__nav-link_active">Главная</NavLink>
            </li>
          </HeaderNavigationMain>
        </div>
      </div>
    </>
  );
}

