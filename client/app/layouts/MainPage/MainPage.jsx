import './MainPage.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';

import Header from '~/Header/containers/Header.jsx';
import AuthForm from '~/Auth/containers/Auth.jsx';
import RegisterForm from '~/Register/containers/Register.jsx';
import PageNotFound from '~/PageNotFound/PageNotFound.jsx';

export default function MainPage() {
    return (
        <div className="container">
            <Header />
            <Switch>
                <Route path="/auth" component={AuthForm}/>
                <Route path="/register" component={RegisterForm}/>
                {/*<Route path="/*" component={PageNotFound}/>*/}
            </Switch>
        </div>
    );
}