import './HeaderUserPic.scss';
import React from 'react';
import {MDBBtn, MDBPopover, MDBPopoverBody, MDBPopoverHeader} from 'mdbreact';
import manImage from "~/assets/img/man.svg";

function HeaderUserPic(props) {
    return (
        <MDBPopover placement="bottom" popover hover id="popper1">
            <MDBBtn >
                <img src={manImage} alt="награда"/>
            </MDBBtn>
            <div>
                <MDBPopoverHeader>Пользователь:</MDBPopoverHeader>
                <MDBPopoverBody>
                    <strong>Имя: </strong>{props.userData.first_name}<br/>
                    <strong>Возраст: </strong>{props.userData.age}<br/>
                </MDBPopoverBody>
            </div>
        </MDBPopover>
    );
}

export default HeaderUserPic;
