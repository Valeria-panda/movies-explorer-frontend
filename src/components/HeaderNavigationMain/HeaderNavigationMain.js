import React from 'react';
import { NavLink } from 'react-router-dom';

// хедер основной для зареганных пользователей со страницы фильмы и сохраненные фильмы
export default function HeaderNavigationMain(props) {

  return (
    <>
        <nav className={`header__panel ${props.mod}`}>
          <ul className={`header__list ${props.navListMod}`}>
          {props.children}
            <li className={`header__item header__item_type_movies ${props.navListItemMod}`}>
              <NavLink to="/movies" className={`header__link ${props.navLinkMod}`} activeClassName="header__link_active">Фильмы</NavLink>
            </li>
            <li className={`header__item header__item_type_save ${props.navListItemMod}`}>
              <NavLink to='/savedmovies' className={`header__link ${props.navLinkMod}`} activeClassName="headerNavigationMobile-menu__nav-link_active">Сохраненные фильмы</NavLink>
            </li>
            <li className={`header__item header__item_type_profile ${props.navLinkProfile}`}>
              <NavLink to='/updateprofile' className="header__link header__link_type_profile">Аккаунт</NavLink>
              <div className='header__link header__link_type_logo'></div>
            </li>
        
          </ul>
        </nav>
      
    </> 
        
  );
}




