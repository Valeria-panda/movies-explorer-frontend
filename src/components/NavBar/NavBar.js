import React, { useState, useEffect } from 'react';
import HeaderNavigationMobile from '../HeaderNavigationMobile/HeaderNavigationMobile';
import HeaderNavigationMain  from '../HeaderNavigationMain/HeaderNavigationMain';

export default function NavBar(){
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const updateWindowSize = () => setWindowWidth(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', updateWindowSize);
        return () => window.removeEventListener('resize', updateWindowSize);
    });


    return(
        <>
            {
            (windowWidth > 768) ? <HeaderNavigationMain /> : <HeaderNavigationMobile/>
            }
        </>
    )
}

