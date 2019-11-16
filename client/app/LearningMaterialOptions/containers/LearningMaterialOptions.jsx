import './LearningMaterialOptions.scss';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import LearningMaterialButton from '~/LearningMaterialOptions/components/LearningMaterialButton.jsx';

class LearningMaterialOptions extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const buttonText = {
            button_1: {
                buttonText: 'Тренировка',
                link: '/choose_course',
                popoverText: 'Тренировка на случайно подобранных заданиях',
            },
            button_2: {
                buttonText: 'Начать обучение',
                link: '/choose_course',
                popoverText: 'Перейти к обучению по систематизированному учебному пособию',
            },
            button_3: {
                buttonText: 'Проверить уровень знаний',
                link: '/test_level',
                popoverText: 'Проверить Ваш уровень владения английским языком',
            },
            button_4: {
                buttonText: 'Продолжить',
                link: '/continue',
                popoverText: 'Продолжить выполнение ранее начатого задания',
            },
        };

        return (
            <div className="container">
                <h5 className="text-center mb-5">
                    Выберите с чем будете работать
                </h5>
                <LearningMaterialButton {...buttonText.button_1} />
                <LearningMaterialButton {...buttonText.button_2} />
                <LearningMaterialButton {...buttonText.button_3} />
                <LearningMaterialButton {...buttonText.button_4} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state.learningMaterialReducer;
}

export default connect(mapStateToProps)(LearningMaterialOptions);