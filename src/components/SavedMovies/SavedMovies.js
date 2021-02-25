import React from 'react';
import HeaderNavigationMain from '../HeaderNavigationMain/HeaderNavigationMain';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';

export default function SavedMovies(){
    function handleSubmit(){

    }
    return(
        <>
            <HeaderNavigationMain />
            <SearchForm name='searchform' handleSubmit={handleSubmit}/>
            <Footer />
        </>
    )
}