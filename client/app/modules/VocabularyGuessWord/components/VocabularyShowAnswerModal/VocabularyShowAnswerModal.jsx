import './VocabularyShowAnswerModal.scss';

import React from 'react';
import { connect } from 'react-redux';
import { MDBBtn, MDBContainer, MDBModal, MDBModalBody, MDBRow } from 'mdbreact';
import { vocabularyCloseAnswerModal } from '~/modules/VocabularyGuessWord/actions';

const VocabularyShowAnswerModal = (props) => {
    return (
        <MDBContainer className="container-fluid">
            <MDBModal isOpen toggle={() => props.dispatch(vocabularyCloseAnswerModal())}>
                <MDBModalBody className="position-relative ">
                    <div className="forms__close"
                        onClick={() => props.dispatch(vocabularyCloseAnswerModal())}>&times;</div>
                    <MDBRow className="vocabulary-modal__text d-flex justify-content-center">
                        <p className="my-5 text text-center">Запомните:</p>
                    </MDBRow>
                    <MDBRow className="vocabulary-modal__text d-flex justify-content-center">
                        <p className="my-2 text text-center">{props.currentTask.givenWordEng}</p>
                    </MDBRow>
                    <MDBRow className="text text-center d-flex justify-content-center">
                        <p className="my-2 text text-center">{props.currentTask.transcription}</p>
                    </MDBRow>
                    <MDBRow className="vocabulary-modal__text d-flex justify-content-center">
                        <p className="my-2 text text-center">{props.currentTask.givenWordRus}</p>
                    </MDBRow>
                    <MDBRow className="mt-5 d-flex justify-content-center">
                        <MDBBtn
                            className="vocabulary-modal__btn rounded-pill"
                            onClick={() => props.dispatch(vocabularyCloseAnswerModal())}>Закрыть</MDBBtn>
                    </MDBRow>
                </MDBModalBody>
            </MDBModal>
        </MDBContainer>
    );
};

export default connect()(VocabularyShowAnswerModal);