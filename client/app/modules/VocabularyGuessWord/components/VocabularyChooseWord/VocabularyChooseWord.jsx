import React from 'react';
import { MDBBtn, MDBCol, MDBRow } from 'mdbreact';
import {connect} from 'react-redux'
import {recordUserAnswer} from '~/modules/VocabularyGuessWord/actions'

const VocabularyChooseWord = (props) => {
    const {currentTask} = props;

    return (
        <>
            <MDBRow>
                <MDBCol md={3} lg={3} sm={0} className=""/>
                <MDBCol md={6} lg={6} sm={12} className="d-flex justify-content-between tasks__btn-container">
                    {currentTask.givenAnswers && currentTask.givenAnswers.map((givenAnswer, key) => {
                        return (
                            <MDBBtn key={key}
                                className="tasks__btn tasks__btn-options rounded-pill"
                                onClick={() => props.dispatch(recordUserAnswer(givenAnswer.type))}>
                                {givenAnswer.word}
                            </MDBBtn>)
                    })}
                </MDBCol>
            </MDBRow>
        </>
    );
};
export default connect()(VocabularyChooseWord);
