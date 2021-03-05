import React from 'react';
import Promo from '../Promo/Promo';
import AboutMe from '../AboutMe/AboutMe';
import AboutProject from '../AboutProject/AboutProject';
import Portfolio from '../Portfolio/Portfolio';
import Techs from '../Techs/Techs';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import AuthNav from '../AuthNav/AuthNav';

export default function Main(){
    return(
        <>
            <Header>
                <AuthNav />
            </Header>
            <Promo />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio />
            <Footer />
        </>
    )
}

