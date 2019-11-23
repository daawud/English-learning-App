import './LearningMaterialButton.scss';
import { MDBBtn, MDBPopover, MDBPopoverBody } from 'mdbreact';
import React from 'react';
import { connect } from 'react-redux';

const LearningMaterialButton = (props) => {
    return (
        <MDBPopover placement="bottom" popover hover>
            <MDBBtn className="learning-material-btn mb-4" onClick={() => props.dispatch(props.showBlock)}>
                {props.buttonText}
            </MDBBtn>
            <MDBPopoverBody>
                {props.popoverText}
            </MDBPopoverBody>
        </MDBPopover>
    );
};
export default connect()(LearningMaterialButton);