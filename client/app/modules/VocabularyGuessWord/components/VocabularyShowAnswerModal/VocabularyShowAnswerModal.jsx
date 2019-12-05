import './VocabularyShowAnswerModal.scss';

import React from 'react';
import { connect } from 'react-redux';
import { MDBBtn, MDBContainer, MDBModal, MDBModalBody, MDBRow, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import { vocabularyCloseAnswerModal } from '~/modules/VocabularyGuessWord/actions';

const VocabularyShowAnswerModal = (props) => {
    return (
        <MDBContainer className="container-fluid">
            <MDBModal isOpen toggle={() => props.dispatch(vocabularyCloseAnswerModal())}>
                <div className="forms__close"
                    onClick={() => props.dispatch(vocabularyCloseAnswerModal())}>&times;</div>
                <MDBModalHeader className="my-1 d-flex justify-content-center">
                    <p className="vocabulary-modal__text">Запомните:</p>
                </MDBModalHeader>
                <MDBModalBody className="position-relative ">
                    <MDBRow className="vocabulary-modal__text d-flex justify-content-center">
                        <p className="my-2 text text-center">{props.currentTask.givenWordEng}</p>
                    </MDBRow>
                    <MDBRow className="text text-center d-flex justify-content-center">
                        <p className="my-2 text text-center">{props.currentTask.transcription}</p>
                    </MDBRow>
                    <MDBRow className="vocabulary-modal__text d-flex justify-content-center">
                        <p className="my-2 text text-center">{props.currentTask.givenWordRus}</p>
                    </MDBRow>
                </MDBModalBody>
                <MDBModalFooter className="my-1 d-flex justify-content-center">
                    <MDBBtn
                        className="vocabulary-modal__btn rounded-pill"
                        onClick={() => props.dispatch(vocabularyCloseAnswerModal())}>Закрыть</MDBBtn>
                </MDBModalFooter>
            </MDBModal>
        </MDBContainer>
    );
};

export default connect()(VocabularyShowAnswerModal);