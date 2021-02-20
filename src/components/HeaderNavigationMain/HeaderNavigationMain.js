import React from 'react';
import HeaderNavigationItem from '../HeaderNavigationItem/HeaderNavigationItem';
import Header from '../Header/Header';

// хедер основной для зареганных пользователей со страницы фильмы и сохраненные фильмы
export default function HeaderNavigationMain() {
  return (
      <>
      <Header>
          <HeaderNavigationItem  path ='/movies' title="фильмы" className='headerNavigationItem__link' />
          <HeaderNavigationItem  path ='/savedmovies' title="Сохраненные фильмы" className='headerNavigationItem__link'/>
          <HeaderNavigationItem  path ='/updateprofile' title="Аккаунт"  className='headerNavigationItem__link'>
              <div className='headerNavigationMain__logo headerNavigationMain__logo_type_profile'></div>
          </HeaderNavigationItem>
      </Header>
       </> 
        
  );
}
