import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainPage from '~/layouts/MainPage/MainPage.jsx';
import PageNotFound from '~/PageNotFound/PageNotFound.jsx';

function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" component={MainPage}/>
                <Route path="*" component={PageNotFound}/>
            </Switch>
        </Router>
    );
}

export default Routes;
