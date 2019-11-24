import './HeaderUserPic.scss';
import React from 'react';
import {MDBBtn, MDBPopover, MDBPopoverBody, MDBPopoverHeader} from 'mdbreact';
import award from "~/assets/img/award_icon_header.svg";

function HeaderUserPic(props) {
    return (
        <MDBPopover placement="bottom" popover hover id="popper1">
            <MDBBtn >
                <div className="header-award d-flex justify-content-between align-items-center p-3" data-toggle="tooltip" title="Количество доступных очков для открытия новых уроков">
                    <img src={award} alt="награда"/>
                    <div className="header-award__score">0.00</div>
                </div>
            </MDBBtn>
            <div>
                <MDBPopoverHeader>Пользователь:</MDBPopoverHeader>
                <MDBPopoverBody>
                    <strong>User: </strong>{props.userData['name']}<br/>
                    <strong>UserAge: </strong>{props.userData['age']}<br/>
                    <strong>Knowledge: </strong>{props.userData['knowledge']}<br/>
                </MDBPopoverBody>
            </div>
        </MDBPopover>
    );
}

export default HeaderUserPic;
