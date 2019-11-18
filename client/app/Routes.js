import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import MainPage from '~/layouts/MainPage/MainPage.jsx';
import Header from '~/Header/containers/Header.jsx';
import Footer from '~/Footer/Footer.jsx';

function Routes() {
    return (
        <div className="wrapper">
            <Header/>
            <Switch>
                <Redirect exact from="/" to="/home" />
                <Route path="/home">
                    <MainPage />
                </Route>
            </Switch>
            <Footer/>
        </div>
        
    );
}

export default Routes;