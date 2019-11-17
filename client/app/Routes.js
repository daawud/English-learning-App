import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import MainPage from '~/layouts/MainPage/MainPage.jsx';
import Header from '~/Header/containers/Header.jsx';

function Routes() {
    return (
        <>
            <Header/>
            <Switch>
                <Redirect exact from="/" to="/home" />
                <Route path="/home">
                    <MainPage />
                </Route>
            </Switch>
        </>
        
    );
}

export default Routes;