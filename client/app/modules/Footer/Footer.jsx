import './Footer.scss';

import React from 'react';
import { Link } from 'react-router-dom';

import crossImg from '~/assets/img/crest_icon.svg';
import facebookImg from '~/assets/img/facebook.svg';
import youtubeImg from '~/assets/img/youtube.svg';
import vkontakteImg from '~/assets/img/vkontakte.svg';
import instagramImg from '~/assets/img/insta.svg';


const Footer = (props) => {
    return (
        <footer>
            <div className="container-fluid">
                <div className="container-row layer">
                    <div className="layer layer-logo">
                        <Link to="/" data-toggle="tooltip" title="Перейти на главную страницу">
                            <span className="footer-logo">eLA</span>
                        </Link>
                    </div>
                    <div className="layer layer-links-1">
                        <div className="layer__text">
                            <Link to="/"><p>О проекте</p></Link>
                            <Link to="/"><p id="terms-policy">Условия и политика</p></Link>
                        </div>
                    </div>
                    <div className="layer layer-links-2">
                        <div className="layer__text">
                            <Link to="/"><p>Справка</p></Link>
                            <Link to="/"><p>Поддержка</p></Link>
                            <Link to="/"><p>Приложения</p></Link>
                        </div>
                    </div>
                    <div className="layer layer-social">
                        <div className="footer-icons">
                            <img className="footer-icons__cross" src={crossImg} alt=""/>
                            <a href="https://www.facebook.com/"><img className="footer-icons__facebook" src={facebookImg}
                                                                     alt="Facebook"/></a>
                            <a href="https://www.youtube.com/"><img className="footer-icons__youtube" src={youtubeImg}
                                                                    alt="Youtube"/></a>
                            <a href="https://vk.com/"><img className="footer-icons__vkontakte" src={vkontakteImg}
                                                           alt="Vkontakte"/></a>
                            <a href="https://www.instagram.com/"><img className="footer-icons__instagram" src={instagramImg}
                                                                      alt="Instagram"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
