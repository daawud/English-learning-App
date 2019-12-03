import './Footer.scss';

import React from 'react';
import { Link } from 'react-router-dom';

import cross from '~/assets/img/crest_icon.svg';
import facebook from '~/assets/img/facebook.svg';
import youtube from '~/assets/img/youtube.svg';
import vkontakte from '~/assets/img/vkontakte.svg';
import instagram from '~/assets/img/insta.svg';


const Footer = (props) => {
    return (
        <footer>
            <div className="container-fluid">
                <div className="container-row layer">
                    <div className="layer layer-1">
                        <Link to="/" data-toggle="tooltip" title="Перейти на главную страницу">
                            <span className="footer-logo">eLA</span>
                        </Link>
                    </div>
                    <div className="layer layer-2">
                        <div className="layer__text">
                            <Link to="/"><p>О проекте</p></Link>
                            <Link to="/"><p id="terms-policy">Условия и политика</p></Link>
                        </div>
                    </div>
                    <div className="layer layer-3">
                        <div className="layer__text">
                            <Link to="/"><p>Справка</p></Link>
                            <Link to="/"><p>Поддержка</p></Link>
                            <Link to="/"><p>Приложения</p></Link>
                        </div>
                    </div>
                    <div className="layer layer-4">
                        <div className="footer-icons">
                            <img className="footer-icons__cross" src={cross} alt=""/>
                            <a href="https://www.facebook.com/"><img className="footer-icons__facebook" src={facebook}
                                                                     alt="Facebook"/></a>
                            <a href="https://www.youtube.com/"><img className="footer-icons__youtube" src={youtube}
                                                                    alt="Youtube"/></a>
                            <a href="https://vk.com/"><img className="footer-icons__vkontakte" src={vkontakte}
                                                           alt="Vkontakte"/></a>
                            <a href="https://www.instagram.com/"><img className="footer-icons__instagram" src={instagram}
                                                                      alt="Instagram"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
