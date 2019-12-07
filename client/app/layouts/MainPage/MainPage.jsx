import './MainPage.scss';

import React from 'react';

import TopBlockMainPage from '~/modules/TopBlockMainPage/containers/TopBlockMainPage.jsx';
import MiddleBlockMainPage from '~/modules/MiddleBlockMainPage/containers/MiddleBlockMainPage.jsx';
import BottomBlockMainPage from '~/modules/BottomBlockMainPage/BottomBlockMainPage.jsx';

export default function MainPage() {
    return (
        <>
            <TopBlockMainPage/>
            <MiddleBlockMainPage/>
            <BottomBlockMainPage/>
        </>
    );
};