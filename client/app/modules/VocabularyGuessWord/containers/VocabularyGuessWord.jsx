import './VocabularyGuessWord.scss';

import { MDBBtn, MDBRow, MDBCol } from 'mdbreact';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import ProgressBar from '~/modules/VocabularyGuessWord/components/ProgressBar/ProgressBar.jsx';
import VocabularyChooseWord
    from '~/modules/VocabularyGuessWord/components/VocabularyChooseWord/VocabularyChooseWord.jsx';
import { tasks } from '~/modules/VocabularyGuessWord/helpers'
import { getVocabularyWordsSet, nextWord } from '~/modules/VocabularyGuessWord/actions';
import Loader from '~/libs/components/Loader/Loader';
import divWithClassName from 'react-bootstrap/cjs/utils/divWithClassName';

class VocabularyGuessWord extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const currentTaskIndex = this.props.currentTaskIndex;
        const currentTask = this.props.tasks[currentTaskIndex];

        return (

            <div className="tasks">
                {!currentTask ? <Loader/> :
                    <div className="m-0 p-1">
                        <MDBRow className="mx-2">
                            <ProgressBar tasks={this.props.tasks}/>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol className="offset-sm-0 offset-md-3 tasks__heading text-center mb-3"
                                md="6" sm="12">Выберите правильный вариант:</MDBCol>
                        </MDBRow>
                        <MDBRow className="m-0">
                            <MDBCol md={4} lg={4} sm={false}
                                className="d-flex justify-content-center align-items-center">
                                <div className="tasks__show-answer">
                                    ПОКАЗАТЬ ОТВЕТ
                                </div>
                            </MDBCol>
                            <MDBCol md={4} className="d-flex justify-content-center">
                                <img src={currentTask.imgUrl}
                                    className="rounded-lg shadow border border-default tasks__img"
                                    alt="картинка слова"/>
                            </MDBCol>
                            <MDBCol md={4} className="d-flex justify-content-center align-items-center mt-3 mb-0">
                                {this.props.currentsUserAnswer === 'incorrect' &&
                                <p className="bg-danger border border-white rounded p-2 text text-light">НЕ
                                    ПРАВИЛЬНО</p>}
                                {this.props.currentsUserAnswer === 'correct' &&
                                <p className="bg-success border border-white rounded p-2 text text-light">ПРАВИЛЬНО</p>}
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className="tasks__word-given mt-2 mb-4">
                            {currentTask.taskType === 'chooseRusWord'
                            && <MDBCol
                                className="text-center text font-weight-bold">{currentTask.givenWordEng}
                                <span className="tasks__transcription">{currentTask.transcription}</span></MDBCol>}
                            {currentTask.taskType === 'chooseEngWord'
                            && <MDBCol
                                className="text-center text font-weight-bold">{currentTask.givenWordRus}</MDBCol>}
                        </MDBRow>
                        {currentTask.taskId <= 2
                            ? <VocabularyChooseWord currentTask={currentTask}/>
                            : 'тут будет модуль ИНПУТ'}
                        <MDBRow className="mx-4 my-3">
                            <MDBCol md={12} lg={12} sm={12} className="d-flex justify-content-between ">
                                <Link to="/" className="m-0 p-0">
                                    <MDBBtn className="tasks__btn tasks__btn-action rounded-pill">Выйти</MDBBtn>
                                </Link>
                                <MDBBtn className="tasks__btn tasks__btn-action rounded-pill"
                                    onClick={() => this.props.dispatch(nextWord())}>Далее</MDBBtn>
                            </MDBCol>
                        </MDBRow>
                    </div>
                }
            </div>
        );
    }

    componentDidMount() {
        // тут или в саге мы получаем tasks из БД
        // пока использую заглушку tasks из файла helpers.js
        setTimeout(() => {
            this.props.dispatch(getVocabularyWordsSet(tasks));
        }, 1000);

    }
}

function mapStateToProps(state) {
    return state.guessWordVocabularyReducer;
}

export default connect(mapStateToProps)(VocabularyGuessWord);
