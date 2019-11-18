import './LearningMaterialOptions.scss';

import React, { Component } from 'react';
import LearningMaterialButton
    from '~/LearningMaterialOptions/components/LearningMaterialButton/LearningMaterialButton.jsx';
import { testOptionsBlockToShow, materialOptionsBlockToShow, courseOptionsBlockToShow } from '~/TopBlockMainPage/actions';

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
            <div className="material-show">
                <p className="learning-material text-center font-weight-bold mb-2">
                    Выберите с чем будете работать
                </p>
                <div className="row justify-content-center">
                    <LearningMaterialButton {...buttons.button_1}/>
                    <LearningMaterialButton {...buttons.button_2}/>
                </div>
                <div className="row justify-content-center">
                    <LearningMaterialButton {...buttons.button_3}/>
                    <LearningMaterialButton {...buttons.button_4}/>
                </div>
            </div>
        );
    }
}

export default LearningMaterialOptions;