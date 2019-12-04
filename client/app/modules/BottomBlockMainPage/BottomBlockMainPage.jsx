import './BottomBlockMainPage.scss';

import React from 'react';
import backGroundPic from '~/assets/img/main_page_bottom_img.jpg';
import flagIconPic from '~/assets/img/flag_icon.svg';
import playIconPic from '~/assets/img/play_icon.svg';
import microphoneIconPic from '~/assets/img/microphone_icon.svg';

const BottomBlockMainPage = (props) => {
    return (
        <div className="bottom-block">
            <img src={backGroundPic} className="bottom-block__img" alt="нижний фон"/>
            <div className="bottom-block__content">
                <div className="bottom-block__btn-container">
                    <button className="bottom-block__btn"><img src={flagIconPic} alt="иконка флага"/></button>
                    <p className="bottom-block__text">Тексты</p>
                </div>
                <div className="bottom-block__btn-container">
                    <button className="bottom-block__btn"><img src={playIconPic} alt="иконка PLAY"/></button>
                    <p className="bottom-block__text">Видео</p>
                </div>
                <div className="bottom-block__btn-container">
                    <button className="bottom-block__btn"><img src={microphoneIconPic} alt="иконка микрофона"/></button>
                    <p className="bottom-block__text">Подкасты</p>
                </div>
            </div>
        </div>
    );
};

export default BottomBlockMainPage;