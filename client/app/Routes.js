import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import MainPage from '~/layouts/MainPage/MainPage.jsx';
import Vocabulary from '~/layouts/Vocabulary/Vocabulary.jsx';
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
                <Route path="/vocabulary/:type" children={<Vocabulary />}/>
                <Route path="/vocabulary" children={<Vocabulary />}/>
            </Switch>
            <Footer/>
        </div>
    );
}

export default Routes;