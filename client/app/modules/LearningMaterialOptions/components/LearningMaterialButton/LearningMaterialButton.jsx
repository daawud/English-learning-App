import './LearningMaterialButton.scss';
import { MDBBtn, MDBPopover, MDBPopoverBody } from 'mdbreact';

import React from 'react';
import { Link } from 'react-router-dom';

const LearningMaterialButton = (props) => {
    return (
        <MDBPopover placement="bottom" popover hover>
            <Link to={props.link}>
                <MDBBtn className="learning-material-btn mb-4">
                    {props.buttonText}
                </MDBBtn>
            </Link>
            <MDBPopoverBody>
                {props.popoverText}
            </MDBPopoverBody>
        </MDBPopover>
    );
};
export default LearningMaterialButton;