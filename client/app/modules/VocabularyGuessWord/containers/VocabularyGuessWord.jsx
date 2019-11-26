import './VocabularyGuessWord.scss';
import { MDBBtn, MDBRow, MDBCol, MDBNavLink } from 'mdbreact';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProgressBar from '~/modules/VocabularyGuessWord/components/ProgressBar/ProgressBar.jsx';
import VocabularyChooseWord
    from '~/modules/VocabularyGuessWord/components/VocabularyChooseWord/VocabularyChooseWord.jsx';
import { tasks } from '~/modules/VocabularyGuessWord/helpers'
import { getVocabularyWordsSet, nextWord } from '~/modules/VocabularyGuessWord/actions';
import Loader from '~/libs/components/Loader/Loader';

class VocabularyGuessWord extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const currentTaskIndex = this.props.currentTaskIndex;
        const currentTask = this.props.tasks[currentTaskIndex];

        return (
            <>
                {!currentTask ? <Loader /> : (
                    <div className="m-0 tasks p-1">
                        <MDBRow className="m-0">
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
                                <img src={currentTask.imgUrl} className="rounded-lg shadow border border-default"
                                    alt="картинка слова"/>
                            </MDBCol>
                            <MDBCol md={4} className="d-flex justify-content-center align-items-center">
                                {this.props.currentsUserAnswer === 'incorrect' &&
                                <h4 className="bg-danger border border-white rounded p-2 text text-light">НЕ ПРАВИЛЬНО</h4>}
                                {this.props.currentsUserAnswer === 'correct' &&
                                <h4 className="bg-success border border-white rounded p-2 text text-light">ПРАВИЛЬНО</h4>}
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className="tasks__word-given my-4">
                            {currentTask.taskType === 'chooseRusWord'
                            && <MDBCol className="text-center text font-weight-bold">{currentTask.givenWordEng} {currentTask.transcription}</MDBCol>}
                            {currentTask.taskType === 'chooseEngWord'
                            && <MDBCol className="text-center text font-weight-bold">{currentTask.givenWordRus}</MDBCol>}
                        </MDBRow>
                        {currentTask.id <=2
                            ? <VocabularyChooseWord currentTask={currentTask}/>
                            : 'тут будет модуль ИНПУТ'}
                        <MDBRow>
                            <MDBCol md={12} lg={12} sm={12} className="d-flex justify-content-between my-1 px-5">
                                <MDBNavLink to="/">
                                    <MDBBtn className="tasks__btn tasks__btn-action rounded-pill">Выйти</MDBBtn>
                                </MDBNavLink>
                                <MDBBtn className="tasks__btn tasks__btn-action rounded-pill"
                                    onClick={() => this.props.dispatch(nextWord())}>Далее</MDBBtn>
                            </MDBCol>
                        </MDBRow>
                    </div>)}
            </>
        );
    }

    componentDidMount() {
        // тут или в саге мы получаем tasks из БД
        // пока использую заглушку tasks из файла helpers.js
        this.props.dispatch(getVocabularyWordsSet(tasks));
    }
}

function mapStateToProps(state) {
    return state.guessWordVocabularyReducer;
}

export default connect(mapStateToProps)(VocabularyGuessWord);
