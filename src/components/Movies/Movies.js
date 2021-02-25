import React from 'react';
import HeaderNavigationMain from '../HeaderNavigationMain/HeaderNavigationMain';
import MovieCardList from '../MovieCardList/MovieCardList';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';

export default function Movies(){
    function handleSubmit(e){
        e.preventDefault();
    }
    return(
        <>
            <HeaderNavigationMain />
            <SearchForm name='searchform' handleSubmit={handleSubmit}/>
            <MovieCardList />
            <Footer />
            
        </>
    )
}