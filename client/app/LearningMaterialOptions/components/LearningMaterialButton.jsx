import './LearningMaterialButton.scss';
import { MDBBtn } from 'mdbreact';
import React from 'react';
import { connect } from 'react-redux';
import { testOptionsBlockToShow } from '~/TopBlockMainPage/actions';

const LearningMaterialButton = (props) => {
    return (
        <MDBBtn>
            <div className="border border-dark rounded p-2"
                onClick={() => props.dispatch(testOptionsBlockToShow())}> 
                {props.text} 
            </div>
        </MDBBtn>
    );
};
export default connect()(LearningMaterialButton);