import './MainPage.scss';

import React from 'react';
import { useParams } from 'react-router-dom';
import TopBlockMainPage from '~/modules/TopBlockMainPage/containers/TopBlockMainPage.jsx';

export default function MainPage() {
    // получаем из роутера название страницы которую надо открыть
    // пробрасываем пропсами в блок TopBlockMainPage чтобы тут не раздувать структуру
    let { page } = useParams();

    return (
        <>
            <TopBlockMainPage page={page}/>
        </>
    );
}