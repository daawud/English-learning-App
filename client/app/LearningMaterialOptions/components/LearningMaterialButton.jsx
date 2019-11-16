import './LearningMaterialButton.scss';
import { MDBBtn } from 'mdbreact';
import React from 'react';
import { Link } from 'react-router-dom';

const LearningMaterialButton = (props) => {
    return (
        <MDBBtn>
            <Link to={props.link}> {props.text} </Link>
        </MDBBtn>
    );
};

export default LearningMaterialButton;