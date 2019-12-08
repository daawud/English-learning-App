import './SwipeToSlide.scss';

import React, { Component } from 'react';
import Slider from 'react-slick';

import cardsImg from '~/assets/img/main-page-middle-block-mobile-cards.svg';
import differentImg from '~/assets/img/main-page-middle-block-mobile-different.svg';
import entertainImg from '~/assets/img/main-page-middle-block-mobile-entertain.svg';
import examplesImg from '~/assets/img/main-page-middle-block-mobile-examples.svg';
import individualImg from '~/assets/img/main-page-middle-block-mobile-individual.svg';
import mapsImg from '~/assets/img/main-page-middle-block-mobile-maps.svg';
import reminderImg from '~/assets/img/main-page-middle-block-mobile-reminder.svg';
import russianImg from '~/assets/img/main-page-middle-block-mobile-russian.svg';
import testsImg from '~/assets/img/main-page-middle-block-mobile-tests.svg';

export default class SwipeToSlide extends Component {
    render() {
        const settings = {
            className: 'center',
            infinite: false,
            arrows: false,
            slidesToShow: 1,
            swipeToSlide: true,
        };
        return (
            <Slider {...settings}>
                <div className="middle-block__slide">
                    <img src={cardsImg} alt="Карточки изучения лексики"/>
                </div>
                <div className="middle-block__slide">
                    <img src={mapsImg} alt="Mind Maps"/>
                </div>
                <div className="middle-block__slide">
                    <img src={entertainImg} alt="Тексты, видео, подкасты"/>
                </div>
                <div className="middle-block__slide">
                    <img src={individualImg} alt="Индивидуальный план обучения"/>
                </div>
                <div className="middle-block__slide">
                    <img src={reminderImg} alt="Напоминания о занятии"/>
                </div>
                <div className="middle-block__slide">
                    <img src={testsImg} alt="Эффективные тесты"/>
                </div>
                <div className="middle-block__slide">
                    <img src={examplesImg} alt="Примеры употребления слов"/>
                </div>
                <div className="middle-block__slide">
                    <img src={differentImg} alt="Эффект Ресторффа"/>
                </div>
                <div className="middle-block__slide">
                    <img src={russianImg} alt="Ассоциации на русском"/>
                </div>
            </Slider>
        );
    }
}
