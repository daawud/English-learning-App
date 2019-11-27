import './CourseOptionButton.scss';
import { MDBBtn, MDBPopover, MDBPopoverBody } from 'mdbreact';
import React from 'react';
import {Link} from 'react-router-dom';
const CourseOptionButton = (props) => {

    return (
        <MDBPopover placement="bottom" popover hover>
            <Link to={props.link}>
                <MDBBtn className="course-btn mb-4">
                    {props.buttonText}
                </MDBBtn>
            </Link>
            <MDBPopoverBody>
                {props.popoverText}
            </MDBPopoverBody>
        </MDBPopover>
    );
};

export default CourseOptionButton;