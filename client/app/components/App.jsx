import React, { Component } from 'react';

import MainPage from '~/layouts/MainPage/MainPage.jsx';
import ForgotPassword from '~/components/ForgotPassword.jsx';
import PageNotFound from '~/components/PageNotFound.jsx';

import { Route, Switch } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <Switch>
                        <Route exact path="/" component={MainPage}/>
                        <Route path="/forgot_password" component={ForgotPassword}/>
                        <Route path="*" component={PageNotFound}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;