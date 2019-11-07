import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainPage from '~/layouts/MainPage/MainPage.jsx';
import PageNotFound from '~/PageNotFound/PageNotFound.jsx';
import AuthForm from '~/Auth/containers/Auth.jsx';
import RegisterForm from '~/REGISTER/containers/Register.jsx';

function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={MainPage}/>
                <Route path="/auth" component={AuthForm}/>
                <Route path="/register" component={RegisterForm}/>
                <Route path="*" component={PageNotFound}/>
            </Switch>
        </Router>
    );
}

export default Routes;
