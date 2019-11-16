import './LearningMaterialButton.scss';
import { MDBBtn, MDBPopover, MDBPopoverBody} from 'mdbreact';

import React from 'react';
import { Link } from 'react-router-dom';

const LearningMaterialButton = (props) => {
    return (
        <>
            <MDBPopover placement="bottom"
                        popover
                        hover>
                <MDBBtn className="learning-material-btn">
                    <Link className="learning-material-link" to={props.link}> {props.buttonText} </Link>
                </MDBBtn>
                <MDBPopoverBody>
                    {props.popoverText}
                </MDBPopoverBody>
            </MDBPopover>
        </>
    );
};

export default LearningMaterialButton;