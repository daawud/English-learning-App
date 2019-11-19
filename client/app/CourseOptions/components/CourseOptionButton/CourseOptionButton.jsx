import './CourseOptionButton.scss';
import { MDBBtn, MDBPopover, MDBPopoverBody } from 'mdbreact';
import React from 'react';
import { connect } from 'react-redux';

const CourseOptionButton = (props) => {
    return (
        <MDBPopover placement="bottom"
                    popover
                    hover>
            <MDBBtn className="course-btn" onClick={() => props.dispatch(props.showBlock)}>
                <span>{props.buttonText}</span>
            </MDBBtn>
            <MDBPopoverBody>
                {props.popoverText}
            </MDBPopoverBody>
        </MDBPopover>
    );
};
export default connect()(CourseOptionButton);