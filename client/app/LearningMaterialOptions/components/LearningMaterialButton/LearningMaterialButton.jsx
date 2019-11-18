import './LearningMaterialButton.scss';
import { MDBBtn, MDBPopover, MDBPopoverBody } from 'mdbreact';
import React from 'react';
import { connect } from 'react-redux';

const LearningMaterialButton = (props) => {
    return (
        <MDBPopover placement="bottom"
                    popover
                    hover>
            <MDBBtn className="learning-material-btn" onClick={() => props.dispatch(props.showBlock)}>
                <span>{props.buttonText}</span>
            </MDBBtn>
            <MDBPopoverBody>
                {props.popoverText}
            </MDBPopoverBody>
        </MDBPopover>
    );
};
export default connect()(LearningMaterialButton);