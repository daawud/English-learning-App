import './CourseOptionButton.scss';
import { MDBBtn, MDBPopover, MDBPopoverBody } from 'mdbreact';
import React from 'react';
import { connect } from 'react-redux';

const CourseOptionButton = (props) => {
    return (
        <MDBPopover placement="bottom" popover hover>
            <MDBBtn className="course-btn mb-4" onClick={() => null}>
                {props.buttonText}
            </MDBBtn>
            <MDBPopoverBody>
                {props.popoverText}
            </MDBPopoverBody>
        </MDBPopover>
    );
};
export default connect()(CourseOptionButton);