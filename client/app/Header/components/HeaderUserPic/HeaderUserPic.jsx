import './HeaderUserPic.scss';
import React from 'react';
import {MDBBtn, MDBNavItem, MDBPopover, MDBPopoverBody, MDBPopoverHeader} from "mdbreact";

const imageIcon = 'http://gensec.eu/doc/trap/database/trap/images/Adwaita/256x256/status/avatar-default.png';

function HeaderUserPic() {
    return (
        <MDBPopover placement="bottom" popover hover id="popper1">
            <MDBBtn className="user-pic"><img className="user-pic" src={imageIcon}/></MDBBtn>
            <div>
                <MDBPopoverHeader>Пользователь:</MDBPopoverHeader>
                <MDBPopoverBody>
                    <strong>User: </strong>User<br/>
                    <strong>UserAge: </strong>UserAge<br/>
                    <strong>UserAknowledge: </strong>Aknowledge<br/>
                </MDBPopoverBody>
            </div>
        </MDBPopover>
    );
}

export default HeaderUserPic;
