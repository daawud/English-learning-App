import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import MainPage from '~/layouts/MainPage/MainPage.jsx';

function Routes() {
    return (
        <Router>
            <Route exact path="/" component={MainPage} />
        </Router>
    );
}

export default Routes;
