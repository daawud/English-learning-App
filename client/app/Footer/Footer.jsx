import './Footer.scss';

import React from 'react';

import crest from '~/assets/img/crest.svg';
import facebook from '~/assets/img/facebook.svg';
import youtube from '~/assets/img/youtube.svg';
import vkontakte from '~/assets/img/vkontakte.svg';
import instagram from '~/assets/img/insta.svg';

const Footer = (props) => {
    return (
        <div className="footer footer-ela">
            <div className="layer layer-2">
                <p className="footer-logo">eLA</p>
            </div>
            <div className="layer layer-1">
                <div className="layer__text">
                    <p>О проекте</p>
                    <p>Условия и <br/>политика</p>
                </div>
            </div>
            <div className="layer">
                <div className="layer__text">
                    <p>Справка</p>
                    <p>ПОддержка</p>
                    <p>Приложения</p>
                </div>

            </div>
            <div className="footer-icons">
                <img className="position-absolute footer-icons__crest" src={crest} alt=""/>
                <img className="position-absolute footer-icons__facebook" src={facebook} alt=""/>
                <img className="position-absolute footer-icons__youtube" src={youtube} alt=""/>
                <img className="position-absolute footer-icons__vkontakte" src={vkontakte} alt=""/>
                <img className="position-absolute footer-icons__instagram" src={instagram} alt=""/>
            </div>


        </div>
    );
};

export default Footer;