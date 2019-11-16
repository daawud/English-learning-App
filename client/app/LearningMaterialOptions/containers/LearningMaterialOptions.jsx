import './LearningMaterialOptions.scss';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import LearningMaterialButton from '~/LearningMaterialOptions/components/LearningMaterialButton.jsx';

class LearningMaterialOptions extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const buttonText = {
            button_1: {
                text: 'Тренировка',
                link: '/choose_course'
            },
            button_2: {
                text: 'Проверить уровень знаний',
                link: '/test_level'
            },
            button_3: {
                text: 'Начать обучение',
                link: '/choose_course'
            },
            button_4: {
                text: 'Продолжить',
                link: '/continue'
            },
        };

        return (
            <>
                <h4 className="text-center font-weight-bold mb-5">
                    Выберите с чем будете работать
                </h4>
                <LearningMaterialButton {...buttonText.button_1}/>
                <LearningMaterialButton {...buttonText.button_2}/>
                <LearningMaterialButton {...buttonText.button_3}/>
                <LearningMaterialButton {...buttonText.button_4}/>
            </>
        );
    }
}

function mapStateToProps(state) {
    return state.learningMaterialReducer;
}

export default connect(mapStateToProps)(LearningMaterialOptions);