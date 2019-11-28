import './VocabularyChooseWord.scss';

import React from 'react';
import { MDBBtn, MDBCol, MDBRow } from 'mdbreact';
import {connect} from 'react-redux'
import {userCorrectAnswer} from '~/modules/VocabularyGuessWord/actions'

const VocabularyChooseWord = (props) => {
    const {currentTask} = props;

    return (
        <>
            <MDBRow className="d-flex justify-content-center">
                <MDBCol md={6} lg={6} sm={6} className="d-flex justify-content-center tasks__btn-container">
                    {currentTask.givenAnswers && currentTask.givenAnswers.map((givenAnswer, key) => {
                        return (
                            <MDBBtn key={key}
                                className="tasks__btn tasks__btn-options rounded-pill mx-1"
                                onClick={() => props.dispatch(userCorrectAnswer(givenAnswer.type))}>
                                {givenAnswer.word}
                            </MDBBtn>)
                    })}
                </MDBCol>
            </MDBRow>
        </>
    );
};
export default connect()(VocabularyChooseWord);
