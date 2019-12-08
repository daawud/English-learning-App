import './MiddleBlockMainPage.scss';

import React from 'react';
import SwipeToSlide from '~/modules/MiddleBlockMainPage/components/SwipeToSlide.jsx';

import iconImg from '~/assets/img/main-page-middle-block-icon.svg';
import swipeImg from '~/assets/img/main-page-middle-block-mobile-swipe.svg';

const MiddleBlockMainPage = (props) => {
    return (
        <div className="middle-block">
            <div className="middle-block__content">
                <div className="middle-block__span-1 middle-block__flex">
                    <img className="middle-block__icon" src={iconImg} alt="иконка"/>
                    <p className="middle-block__text">Удобные карточки изучения новой лексики</p>
                </div>
                <p className="middle-block__span-2 middle-block__text-small">Не просто списки, а примеры употребления
                    слов</p>
                <p className="middle-block__span-3 middle-block__text-small">Напоминания о занятии</p>
                <p className="middle-block__span-4 middle-block__text-small">Эффект Ресторффа (запоминай отличающееся
                    слово в группе)</p>
                <div className="middle-block__span-5 middle-block__flex">
                    <img className="middle-block__icon" src={iconImg} alt="иконка"/>
                    <p className="middle-block__text">Mind maps (группировка слов по тематикам)</p>
                </div>
                <p className="middle-block__span-6 middle-block__text-small">Ассоциации на русском для сложных слов </p>
                <div className="middle-block__span-7 middle-block__flex">
                    <img className="middle-block__icon" src={iconImg} alt="иконка"/>
                    <p className="middle-block__text">Тексты, видео, подкасты на английском языке</p>
                </div>
                <p className="middle-block__span-8 middle-block__text-small">Эффективные тесты самопроверки </p>
                <p className="middle-block__span-9 middle-block__text-small">Индивидуальный план обучения </p>
            </div>
            <div className="middle-block__mobile">
                <div className="middle-block__slides">
                    <SwipeToSlide/>
                </div>
                <div className="middle-block__swipe">
                    <img src={swipeImg} alt="Листайте влево"/>
                </div>
            </div>
        </div>
    );
};

export default MiddleBlockMainPage;