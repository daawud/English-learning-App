import './CourseOptions.scss';
import React, { Component } from 'react';

import CourseOptionButton from '~/CourseOptions/components/CourseOptionButton/CourseOptionButton.jsx';
import ReturnButton from '~/TopBlockMainPage/components/ReturnButton/ReturnButton.jsx';
import { materialOptionsBlockToShow } from '~/TopBlockMainPage/actions';
import { authFormToOpen } from '~/Header/actions';

class CourseOptions extends Component {
    render() {
        const buttons = {
            button_1: {
                buttonText: 'Словарь',
                popoverText: 'Добавь в свой словарь новые слова',
                showBlock: authFormToOpen(),
            },
            button_2: {
                buttonText: 'Грамматика',
                popoverText: 'Научись выражать свои мысли',
                showBlock: authFormToOpen(),
            },
            button_3: {
                buttonText: 'Разговорный английский',
                popoverText: 'Наслаждайся общением с людьми вокруг тебя',
                showBlock: authFormToOpen(),
            },
        };

        return (
            <div className="course-show">
                <p className="course text-center font-weight-bold mb-2">
                    Выберите курс обучения
                </p>
                <div className="col-4 offset-4">
                    <CourseOptionButton {...buttons.button_1}/>
                    <CourseOptionButton {...buttons.button_2}/>
                    <CourseOptionButton {...buttons.button_3}/>
                    <ReturnButton action={materialOptionsBlockToShow}/>
                </div>
            </div>
        );
    }
}

export default CourseOptions;