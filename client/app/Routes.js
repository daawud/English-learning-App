import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import MainPage from '~/layouts/MainPage/MainPage.jsx';
import Header from '~/modules/Header/containers/Header.jsx';
import Footer from '~/modules/Footer/Footer.jsx';

function Routes() {
    return (
        <div className="container">
            <Header/>
            <Switch>
                <Redirect exact from="/" to="/home" />
                <Route path="/home/:page" children={<MainPage />}/>
                <Route path="/home" children={<MainPage />}/>
            </Switch>
            <Footer/>
        </div>
    );
}

export default Routes;