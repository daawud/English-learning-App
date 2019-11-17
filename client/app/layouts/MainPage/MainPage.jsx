import './MainPage.scss';

import React from 'react';
import Header from '~/Header/containers/Header.jsx';
import TopBlockMainPage from '~/TopBlockMainPage/containers/TopBlockMainPage.jsx';

export default function MainPage() {
    return (
        <div className="wrapper">
            <Header/>
            <TopBlockMainPage />
        </div>
    );
}