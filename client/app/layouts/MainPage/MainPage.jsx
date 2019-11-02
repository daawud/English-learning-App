import './MainPage.scss';

import React from 'react';
import { Link } from 'react-router-dom';

import ForgotPassword from '~/ForgotPassword/containers/ForgotPassword.jsx';

function MainPage() {
    return (
            <div className="main-page">
                <Link to="/forgot_password"><ForgotPassword/></Link>
            </div>
    );
}

export default MainPage;
