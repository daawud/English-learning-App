import './CourseOptions.scss';
import React, { Component } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBBtn } from 'mdbreact';
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
            <MDBContainer className="course-show py-2">
                <MDBRow className="d-flex justify-content-center">
                    <p className="course-show__heading text-center font-weight-bold mb-5">
                        Выберите курс обучения
                    </p>
                </MDBRow>

                <MDBRow className="d-flex flex-column justify-content-center align-items-center">
                    <MDBCol sm={8} md={8} lg={3}><CourseOptionButton {...buttons.button_1}/></MDBCol>
                    <MDBCol sm={8} md={8} lg={3}><CourseOptionButton {...buttons.button_2}/></MDBCol>
                    <MDBCol sm={8} md={8} lg={3}><CourseOptionButton {...buttons.button_3}/></MDBCol>
                </MDBRow>
                <MDBRow className="d-flex justify-content-center">
                    <ReturnButton action={materialOptionsBlockToShow}/>
                </MDBRow>
            </MDBContainer>
        );
    }
}

export default CourseOptions;