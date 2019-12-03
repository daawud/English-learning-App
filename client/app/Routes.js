import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import MainPage from '~/layouts/MainPage/MainPage.jsx';
import Vocabulary from '~/layouts/Vocabulary/Vocabulary.jsx';
import Header from '~/modules/Header/containers/Header.jsx';
import Footer from '~/modules/Footer/Footer.jsx';
import PageNotFound from '~/modules/PageNotFound/PageNotFound.jsx';


export default function Routes() {
    return (
        <div className="container">
            <Header/>
            <div className="main-container">
                <Switch>
                    <Redirect exact from="/" to="/home" />
                    <Route exact path="/home/dashboard"><MainPage/></Route>
                    <Route exact path="/home/test"><MainPage/></Route>
                    <Route exact path="/home/training"><MainPage/></Route>
                    <Route exact path="/home/study"><MainPage/></Route>
                    <Route exact path="/home"><MainPage/></Route>
                    <Route exact path="/vocabulary"><Vocabulary/></Route>
                    <Route path="/*"><PageNotFound/></Route>
                </Switch>
            </div>
            <Footer/>
        </div>
    );
}