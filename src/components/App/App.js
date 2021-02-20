import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
export default function App(){
   return(    
    <>
        <Switch>
            <Route exact path='/'>
                <Main />
            </Route>
            <Route path='/signin'>
                <Login 
                    // onLogin={handleLogin}
                />
            </Route>
            <Route path='/signup'>
                <Register 
                    // onRegister={handleRegister}
                />
            </Route>
            <Route path='/updateProfile'>
                <Profile />
            </Route>
            <Route path='/movies'>
                <Movies />
            </Route>
            <Route path='/savedmovies'>
                <SavedMovies />
            </Route>
            <Route path='/notfound'>
                <NotFound />
            </Route>
        </Switch>        
        <Footer />
    </> 
   )  
}

