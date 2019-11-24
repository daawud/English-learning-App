import './TestOptionBlock.scss';

import React from 'react';
import { MDBBtn, MDBPopover, MDBPopoverBody, MDBNavLink, MDBCol } from 'mdbreact';

const TestOptionBlock = (props) => {
    return (
        <MDBPopover placement="bottom" popover hover>
            <MDBBtn className="test-option__btn my-3 position-relative">
                <MDBCol className="test-option__btn__filled m-0 p-0 d-flex align-items-center justify-content-center">
                    <span className="font-weight-bold">{props.name}</span>
                </MDBCol>
                <MDBNavLink to="#" className="d-flex justify-content-end p-0">
                    <MDBCol className="text text-right">{props.text}</MDBCol>
                </MDBNavLink>
            </MDBBtn>
            <MDBPopoverBody>
                Пройти тестовое задание на соответствие уровню "{props.text}"
            </MDBPopoverBody>
        </MDBPopover>
    );
};

export default TestOptionBlock;