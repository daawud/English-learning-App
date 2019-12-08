import './VocabularyInputWord.scss';
import { MDBCol, MDBRow } from 'mdbreact';

import { userCorrectAnswer } from '~/modules/VocabularyGuessWord/actions';

import { connect } from 'react-redux';
import React, { Component } from 'react';

class VocabularyInputWord extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            color: 'red'
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onBlurHandler = this.onBlurHandler.bind(this);
    }

    componentDidUpdate(prevProps) {
        // стираем состояние поля INPUT при обновлении компонента
        if (this.props.index !== prevProps.index) {
            this.setState({value: '', color: 'red'});
        }
    }
    /**
     * Функция обработки ввода слова в поле
     * @param event
     */
    onChangeHandler(event) {
        const {currentTask} = this.props;
        const value = event.target.value.toLowerCase();
        this.setState({...this.state, value});
        const correctAnswers = currentTask.givenAnswers.filter(answer => answer.type === 'correct');

        correctAnswers.forEach(answer => {
            if (value === answer.word.toLowerCase()) {
                this.setState({value, color: 'green'});
                this.props.dispatch(userCorrectAnswer('correct'));
            } else {
                this.setState({value, color: 'red'});
            }
        })
    }

    /**
     * Функция обработки введенного слова в поле при потере фокуса
     * @param event
     */
    onBlurHandler(event) {
        const {currentTask} = this.props;
        const value = event.target.value.toLowerCase();

        // если строка не пустая делаем проверку
        if (value) {
            const correctAnswers = currentTask.givenAnswers.filter(answer => answer.type === 'correct');

            correctAnswers.forEach(answer => {
                if (value !== answer.word.toLowerCase()) {
                    this.props.dispatch(userCorrectAnswer('incorrect'));
                }
            })
        }
    }

    render() {
        const {currentTask} = this.props;
        return (
            <MDBRow>
                <MDBCol md={3} lg={3} sm={0} className=""/>
                <MDBCol md={12} lg={6} sm={12} className="d-flex justify-content-center">
                    <form className="mx-1 mt-2">
                        <label htmlFor="inputWord">Введите перевод {
                            currentTask.taskType === 'typeRusWord' ? '(на рус)' : '(на англ)'
                        }: </label>
                        <input
                            style={{color: this.state.color}}
                            type="text"
                            id="inputWord"
                            value={this.state.value}
                            className="px-2 voc-input"
                            onChange={this.onChangeHandler}
                            onBlur={this.onBlurHandler}
                            maxLength={50}
                        />
                    </form>
                </MDBCol>
            </MDBRow>
        );
    }
}

export default connect()(VocabularyInputWord);
