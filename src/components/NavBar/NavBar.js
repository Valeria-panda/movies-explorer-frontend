  
import React from 'react';
import HeaderNavigationMobile from '../HeaderNavigationMobile/HeaderNavigationMobile';
import HeaderNavigationMain  from '../HeaderNavigationMain/HeaderNavigationMain';

export default function NavBar(){
    return(
        <>
            {
            (window.innerWidth > 768) ? <HeaderNavigationMain /> : <HeaderNavigationMobile/>
            }
        </>
    )
}

