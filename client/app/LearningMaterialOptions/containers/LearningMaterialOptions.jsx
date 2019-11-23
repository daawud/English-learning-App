import './LearningMaterialOptions.scss';

import React, { Component } from 'react';
import LearningMaterialButton
    from '~/LearningMaterialOptions/components/LearningMaterialButton/LearningMaterialButton.jsx';
import { testOptionsBlockToShow, materialOptionsBlockToShow, courseOptionsBlockToShow } from '~/TopBlockMainPage/actions';

import { MDBCol, MDBContainer, MDBRow, MDBNavLink } from 'mdbreact';
import ReturnButton from '~/TopBlockMainPage/components/ReturnButton/ReturnButton.jsx';

class LearningMaterialOptions extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const buttons = {
            button_1: {
                buttonText: 'Тренировка',
                popoverText: 'Тренировка на случайно подобранных заданиях',
                showBlock: courseOptionsBlockToShow(),
            },
            button_2: {
                buttonText: 'Начать обучение',
                popoverText: 'Перейти к обучению по систематизированному учебному пособию',
                showBlock: courseOptionsBlockToShow(),
            },
            button_3: {
                buttonText: 'Проверить уровень знаний',
                popoverText: 'Проверить Ваш уровень владения английским языком',
                showBlock: testOptionsBlockToShow(),
            },
            button_4: {
                buttonText: 'Продолжить',
                popoverText: 'Продолжить выполнение ранее начатого задания',
                showBlock: materialOptionsBlockToShow(),
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