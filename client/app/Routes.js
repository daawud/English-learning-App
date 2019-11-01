import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from '~/components/App.jsx';

function Routes() {
    return (
        <Router>
            <App/>
        </Router>
    );
}

export default Routes;
