import './HeaderNavbarRight.scss';
import React, {Component} from 'react';
import {MDBNavbarNav, MDBNavItem, MDBPopover, MDBBtn, MDBPopoverBody, MDBPopoverHeader} from "mdbreact";
import {Link} from "react-router-dom";

import HeaderUserPic from '~/Header/components/HeaderUserPic/HeaderUserPic.jsx';

class NavbarRight extends Component {

    render() {

        const fullBar = (
            <MDBNavbarNav right>
                <MDBNavItem>
                    <span className="text-white" data-toggle="tooltip" title="Количество доступных очков для открытия новых уроков">22</span>
                </MDBNavItem>
                <MDBNavItem>
                    <HeaderUserPic />
                </MDBNavItem>
                <MDBNavItem>
                    <Link to="/cabinet"><button className="btn bg-light" data-toggle="tooltip" title="Войти в личный кабинет">Войти в личный кабинет</button></Link>
                </MDBNavItem>
            </MDBNavbarNav>
        );

        const lessBar = (
            <MDBNavbarNav right>
                <MDBNavItem>
                    <Link to="/auth" className="btn bg-light" data-toggle="tooltip" title="Войти в учетную запись">Войти</Link>
                </MDBNavItem>
            </MDBNavbarNav>
        );

        return (
            <>
                {(this.props.userLogged) ? fullBar : lessBar }
            </>
        );
    }
}

export default NavbarRight;
