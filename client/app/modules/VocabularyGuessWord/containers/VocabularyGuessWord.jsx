import './VocabularyGuessWord.scss';

import { MDBBtn, MDBRow, MDBCol } from 'mdbreact';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import ProgressBar from '~/modules/VocabularyGuessWord/components/ProgressBar/ProgressBar.jsx';
import VocabularyChooseWord
    from '~/modules/VocabularyGuessWord/components/VocabularyChooseWord/VocabularyChooseWord.jsx';
import VocabularyInputWord
    from '~/modules/VocabularyGuessWord/components/VocabularyInputWord/VocabularyInputWord.jsx';
import VocabularyShowAnswerModal
    from '~/modules/VocabularyGuessWord/components/VocabularyShowAnswerModal/VocabularyShowAnswerModal.jsx';
import {getVocabularyWordsSet, nextWord, clearVocabulary, vocabularyShowAnswerModal} from '~/modules/VocabularyGuessWord/actions';
import Loader from '~/libs/components/Loader/Loader';

class VocabularyGuessWord extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const currentTaskIndex = this.props.currentTaskIndex;
        const currentTask = this.props.tasks[currentTaskIndex];

        return (
            <div className="tasks d-flex justify-content-center align-items-center">
                {!currentTask ? <Loader/> :
                    <div className="m-0 p-1 tasks__container">
                        {this.props.showAnswerModal && <VocabularyShowAnswerModal currentTask={currentTask}/>}
                        <MDBRow className="mx-2">
                            <ProgressBar tasks={this.props.tasks}/>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol className="offset-sm-0 offset-md-2 tasks__heading text-center mb-3"
                                md="8" sm="12">{currentTask.description}</MDBCol>
                        </MDBRow>
                        <MDBRow className="m-0">
                            <MDBCol md={4} lg={4} sm={false}
                                className="d-flex justify-content-center align-items-center">
                                <MDBBtn className="tasks__show-answer"
                                    onClick={() => this.props.dispatch(vocabularyShowAnswerModal())}>
                                    ПОКАЗАТЬ ОТВЕТ
                                </MDBBtn>
                            </MDBCol>
                            <MDBCol md={4} className="d-flex justify-content-center">
                                <img src={currentTask.imgUrl ? currentTask.imgUrl : 'https://placehold.it/300x200'}
                                    className="rounded-lg shadow border border-default tasks__img"
                                    alt="Картинка текущего слова"/>
                            </MDBCol>
                            <MDBCol md={4}
                                className="tasks__correct-answer d-flex justify-content-center align-items-center mt-3 mb-0">
                                {this.props.currentsUserAnswer === 'incorrect' &&
                                <p className="bg-danger border border-white rounded p-2 text text-light">НЕ
                                    ПРАВИЛЬНО</p>}
                                {this.props.currentsUserAnswer === 'correct' &&
                                <p className="bg-success border border-white rounded p-2 text text-light">ПРАВИЛЬНО</p>}
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className="tasks__word-given mt-2 mb-4">
                            {(currentTask.taskType === 'chooseRusWord' || currentTask.taskType === 'typeRusWord')
                            && <MDBCol
                                className="text-center text font-weight-bold">{currentTask.givenWordEng}
                                <span className="tasks__transcription">{currentTask.transcription}</span>
                            </MDBCol>}
                            {(currentTask.taskType === 'chooseEngWord' || currentTask.taskType === 'typeEngWord')
                            && <MDBCol
                                className="text-center text font-weight-bold">{currentTask.givenWordRus}</MDBCol>}
                        </MDBRow>
                        <div className="tasks__choose-options">
                            {currentTask.taskId <= 2
                                ? <VocabularyChooseWord currentTask={currentTask}/>
                                : <VocabularyInputWord currentTask={currentTask}
                                    typedAnswer={this.props.userInputTypedAnswer}/>
                            }
                        </div>
                        <MDBRow className="mx-4 my-3">
                            <MDBCol md={12} lg={12} sm={12} className="d-flex justify-content-between ">
                                <Link to="/" className="m-0 p-0">
                                    <MDBBtn className="tasks__btn tasks__btn-action rounded-pill">Выйти</MDBBtn>
                                </Link>
                                {!this.props.ifGivenWordsFinished && <MDBBtn className="tasks__btn tasks__btn-action rounded-pill"
                                    onClick={() => this.props.dispatch(nextWord())}>Далее</MDBBtn>}
                                {this.props.ifGivenWordsFinished && <MDBBtn className="tasks__btn tasks__btn-action rounded-pill"
                                    onClick={() => {
                                        this.props.dispatch(clearVocabulary());
                                        this.props.dispatch(getVocabularyWordsSet());
                                    }}>Ещё?</MDBBtn>}
                            </MDBCol>
                        </MDBRow>
                    </div>
                }
            </div>
        );
    }

    componentDidMount() {
        // this.getWordsSet();
        this.props.dispatch(getVocabularyWordsSet());
    }

    componentWillUnmount() {
        // очищаем контейнер при любом выходе из компонента.
        this.props.dispatch(clearVocabulary());
    }
}

function mapStateToProps(state) {
    return state.guessWordVocabularyReducer;
}

export default connect(mapStateToProps)(VocabularyGuessWord);
