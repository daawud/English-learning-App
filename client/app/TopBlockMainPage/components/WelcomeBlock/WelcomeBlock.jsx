import './WelcomeBlock.scss';

import React from 'react';
import backGroundPic from '~/assets/img/main_page_bg_pic.png';
import { connect } from 'react-redux';
import { materialOptionsBlockToShow } from '~/TopBlockMainPage/actions';
import { MDBCol, MDBContainer, MDBRow, MDBBtn } from 'mdbreact';

const WelcomeBlock = (props) => {
    return (
        <MDBContainer className="top-block">
            <MDBRow className="position-relative">
                <MDBCol md="12" className="m-0 p-0 ">
                    <img src={backGroundPic} className="img-fluid" alt="фон"/>
                </MDBCol>
                <MDBCol md="12" className="position-absolute">
                    <MDBRow className="clearfix__block"/>
                    <MDBRow>
                        <MDBCol className="m-0 p-0" md="3" sm={false}/>
                        <MDBCol className="top-block__content" md="8" sm="12" xs="12">
                            <MDBRow>
                                <MDBRow className="clearfix__block"/>
                                <MDBRow>
                                    <MDBCol className="container-fluid">
                                        <p className="top-block__heading">«Английский надо знать! Даже самые глупые
                                            англичане знают его
                                            неплохо.»</p>
                                        <p className="top-block__heading top-block__heading-small">(Лев Ландау)</p>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow className="container-fluid d-flex justify-content-end top-block__btn">
                                    <MDBBtn className="top-block__btn-block"
                                        onClick={() => props.dispatch(materialOptionsBlockToShow())}>НАЧАТЬ ОБУЧЕНИЕ
                                    </MDBBtn>
                                </MDBRow>
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default connect()(WelcomeBlock);