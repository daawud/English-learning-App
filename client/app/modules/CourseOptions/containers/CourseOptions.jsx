import './CourseOptions.scss';
import React, { Component } from 'react';
import { MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import CourseOptionButton from '~/modules/CourseOptions/components/CourseOptionButton/CourseOptionButton.jsx';
import ReturnButton from '~/libs/components/ReturnButton/ReturnButton.jsx';

class CourseOptions extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.heading)
        const buttons = {
            button_1: {
                buttonText: 'Словарь',
                popoverText: 'Добавь в свой словарь новые слова',
                link: '',
            },
            button_2: {
                buttonText: 'Грамматика',
                popoverText: 'Научись выражать свои мысли',
                link: '',
            },
            button_3: {
                buttonText: 'Разговорный английский',
                popoverText: 'Наслаждайся общением с людьми вокруг тебя',
                link: '',
            },
        };

        return (
            <MDBContainer className="course-show py-2">
                <MDBRow className="d-flex justify-content-center">
                    <p className="course-show__heading text-center font-weight-bold mb-5">
                        {this.props.heading}
                    </p>
                </MDBRow>
                <MDBRow className="d-flex flex-column justify-content-center align-items-center">
                    <MDBCol sm={8} md={8} lg={3}><CourseOptionButton {...buttons.button_1}/></MDBCol>
                    <MDBCol sm={8} md={8} lg={3}><CourseOptionButton {...buttons.button_2}/></MDBCol>
                    <MDBCol sm={8} md={8} lg={3}><CourseOptionButton {...buttons.button_3}/></MDBCol>
                </MDBRow>
                <MDBRow className="d-flex justify-content-center">
                    <ReturnButton />
                </MDBRow>
            </MDBContainer>
        );
    }
}

export default CourseOptions;