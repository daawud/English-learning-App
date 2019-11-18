import './WelcomeBlock.scss';

import React from 'react';
import backGroundPic from '~/assets/img/main_page_bg_pic.png';
import { connect } from 'react-redux';
import { materialOptionsBlockToShow } from '~/TopBlockMainPage/actions';

const WelcomeBlock = (props) => {
    return (
        <div className="top-block">
            <img src={backGroundPic} alt="фон"/>
            <h2 className="top-block__heading">«Английский надо знать! Даже самые глупые англичане знают его
                    неплохо.»
            <br/> <small className="top-block__heading-small">(Лев Ландау)</small>
            </h2>
            <button className="top-block__btn" onClick={() => props.dispatch(materialOptionsBlockToShow())}>Начать Обучение</button>
        </div>
    );
};

export default connect()(WelcomeBlock);