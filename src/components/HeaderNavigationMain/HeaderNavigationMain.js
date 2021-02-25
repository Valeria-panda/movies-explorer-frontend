import React, { useState, useEffect, useContext } from 'react';
import HeaderNavigationItem from '../HeaderNavigationItem/HeaderNavigationItem';
import Header from '../Header/Header';

// хедер основной для зареганных пользователей со страницы фильмы и сохраненные фильмы
export default function HeaderNavigationMain() {


 const [windowWidth, setWindowWidth] = useState(window.innerWidth);
 const [isMenuOpen, setIsMenuOpen] = useState(false);
 
function updateWindowSize() {
    setWindowWidth(window.innerWidth);
    window.innerWidth <= 768 ? setIsMenuOpen(false) : setIsMenuOpen(true);
}

const headerStyle = `${(windowWidth <= 768) ? 'header__panel_mobile' : ''}
${((windowWidth <= 768) && (!isMenuOpen)) ? 'hidden' : ''}`
useEffect(() => {
    window.addEventListener('resize', updateWindowSize);

    return () => {
      window.removeEventListener('resize', updateWindowSize);
    }
  });

  function handleButtonClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
        <Header className={headerStyle}>
            <div className='header__panel'>
                <HeaderNavigationItem  path ='/movies' title="фильмы" className='headerNavigationItem__link' />
                <HeaderNavigationItem  path ='/savedmovies' title="Сохраненные фильмы" className='headerNavigationItem__link'/>
                <HeaderNavigationItem  path ='/updateprofile' title="Аккаунт"  className='headerNavigationItem__link'>
                    <div className='headerNavigationMain__logo headerNavigationMain__logo_type_profile'></div>
                </HeaderNavigationItem>
               
            </div>
        </Header>
    </> 
        
  );
}
