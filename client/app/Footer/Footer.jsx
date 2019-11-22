import './Footer.scss';

import React from 'react';
import {Link} from 'react-router-dom';
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBBtn } from 'mdbreact';

import crest from '~/assets/img/crest_icon.svg';
import facebook from '~/assets/img/facebook.svg';
import youtube from '~/assets/img/youtube.svg';
import vkontakte from '~/assets/img/vkontakte.svg';
import instagram from '~/assets/img/insta.svg';


const Footer = (props) => {
    return (
        <MDBFooter className="m-0 p-0">
            <MDBContainer fluid className="">
                <MDBRow className="footer-ela layer">
                    <MDBCol md="3" sm="12" className="layer layer-1 d-flex justify-content-center align-items-center">
                        <Link to="/" data-toggle="tooltip" title="Перейти на главную страницу">
                            <span className="footer-logo">eLA</span>
                        </Link>
                    </MDBCol>
                    <MDBCol md="6" sm="12" className="layer layer-2 d-flex justify-content-end align-items-center">
                        <div className="layer__text p-0 mr-3">
                            <Link to="/"><p>О проекте</p></Link>
                            <Link to="/"><p>Условия и <br/>политика</p></Link>
                        </div>
                    </MDBCol>
                    <MDBCol md="9" sm="12" className="layer layer-3 d-flex justify-content-end align-items-center">
                        <div className="layer__text p-0 mr-3">
                            <Link to="/"><p>Справка</p></Link>
                            <Link to="/"><p>Поддержка</p></Link>
                            <Link to="/"><p>Приложения</p></Link>
                        </div>
                    </MDBCol>
                    <MDBCol md="3" sm="12" className="m-0 p-0 layer layer-4 d-flex justify-content-center align-items-center">
                        <div className="footer-icons m-0 p-0">
                            <img className="footer-icons__crest" src={crest} alt=""/>
                            <a href="https://www.facebook.com/"><img className="footer-icons__facebook" src={facebook} alt=""/></a>
                            <a href="https://www.youtube.com/"><img className="footer-icons__youtube" src={youtube} alt=""/></a>
                            <a href="https://vk.com/"><img className="footer-icons__vkontakte" src={vkontakte} alt=""/></a>
                            <a href="https://www.instagram.com/"><img className="footer-icons__instagram" src={instagram} alt=""/></a>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </MDBFooter>
    );
};

export default Footer;
