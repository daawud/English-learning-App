import './TestOptionBlock.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import {MDBBtn, MDBPopover, MDBPopoverBody, MDBPopoverHeader} from 'mdbreact';

const TestOptionBlock = (props) => {
    return (
        <MDBPopover placement="bottom" popover hover id="popper1">
            <MDBBtn >
                <div className="test-option__link">
                    <Link to={`/test/${props.path}`}>
                        <div className="test-option__btn test-option__btn-center d-flex align-items-center">
                            <div className="test-option__btn__filled d-flex align-items-center justify-content-center">
                                <span className="font-weight-bold">{props.name}</span>
                            </div>
                            <div className="">{props.text}</div>
                        </div>
                    </Link>
                </div>
            </MDBBtn>
            <div>
                <MDBPopoverHeader>Уровень {props.name}</MDBPopoverHeader>
                <MDBPopoverBody>
                    <strong>Пройти тестовое задание на соответствие уровню "{props.text}"</strong>
                </MDBPopoverBody>
            </div>
        </MDBPopover>

    );
};

export default TestOptionBlock;