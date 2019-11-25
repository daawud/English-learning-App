import './SignOut.scss';
import React from 'react';
import {MDBBtn, MDBPopover, MDBPopoverBody} from 'mdbreact';

function SignOutButton() {
    return(
        <MDBPopover placement="bottom" popover hover>
            <MDBBtn className="sign-out-btn">
                Выйти
            </MDBBtn>
            <MDBPopoverBody>
                Выйти из личного кабинета
            </MDBPopoverBody>
        </MDBPopover>
    );
}

export default SignOutButton;