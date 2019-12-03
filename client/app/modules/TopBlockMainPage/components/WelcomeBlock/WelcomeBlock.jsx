import './WelcomeBlock.scss';

import React from 'react';
import {Link} from 'react-router-dom';
import backGroundPic from '~/assets/img/main_page_top_img.png';

const WelcomeBlock = (props) => {
    return (
        <div className="top-block">
            <img src={backGroundPic} className="top-block__img" alt="фон"/>
            <div className="top-block__content">
                <div className="top-block__content-text">
                    <p className="top-block__heading">«Английский надо знать! Даже самые глупые англичане знают его неплохо.»</p>
                    <p className="top-block__heading top-block__heading-small">(Лев Ландау)</p>
                </div>
                <div className="top-block__btn">
                    <Link to='/home/dashboard'>
                        <button className="top-block__btn-block">НАЧАТЬ ОБУЧЕНИЕ</button>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default WelcomeBlock;