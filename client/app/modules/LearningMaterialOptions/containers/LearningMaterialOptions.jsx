import './LearningMaterialOptions.scss';

import React, { Component } from 'react';
import LearningMaterialButton from '~/modules/LearningMaterialOptions/components/LearningMaterialButton/LearningMaterialButton.jsx';

import { MDBCol, MDBContainer, MDBRow, MDBNavLink } from 'mdbreact';
import ReturnButton from '~/libs/components/ReturnButton/ReturnButton.jsx';

class LearningMaterialOptions extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const buttons = {
            button_1: {
                buttonText: 'Тренировка',
                popoverText: 'Тренировка на случайно подобранных заданиях',
                link: '/home/training',
            },
            button_2: {
                buttonText: 'Начать обучение',
                popoverText: 'Перейти к обучению по систематизированному учебному пособию',
                link: '/home/study',
            },
            button_3: {
                buttonText: 'Проверить уровень знаний',
                popoverText: 'Проверить Ваш уровень владения английским языком',
                link: '/home/test',
            },
            button_4: {
                buttonText: 'Продолжить',
                popoverText: 'Продолжить выполнение ранее начатого задания',
                link: '',
            },
        };

        return (
            <MDBContainer className="material-show py-2">
                <MDBRow className="d-flex justify-content-center">
                    <p className="material-show__heading text-center font-weight-bold mb-5">
                        Выберите с чем будете работать
                    </p>
                </MDBRow>
                <MDBRow className="d-flex justify-content-center align-items-center">
                    <MDBCol sm={8} md={5} lg={5}><LearningMaterialButton {...buttons.button_1}/></MDBCol>
                    <MDBCol sm={8} md={5} lg={5}><LearningMaterialButton {...buttons.button_2}/></MDBCol>
                </MDBRow>
                <MDBRow className="d-flex justify-content-center align-items-center">
                    <MDBCol sm={8} md={5} lg={5}><LearningMaterialButton {...buttons.button_3}/></MDBCol>
                    <MDBCol sm={8} md={5} lg={5}><LearningMaterialButton {...buttons.button_4}/></MDBCol>
                </MDBRow>
                <MDBRow className="d-flex justify-content-center">
                    <MDBNavLink to="/">
                        <ReturnButton/>
                    </MDBNavLink>
                </MDBRow>
            </MDBContainer>
        );
    }
}

export default LearningMaterialOptions;