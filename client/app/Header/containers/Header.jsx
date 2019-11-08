import './Header.scss';
import React, {Component} from 'react';
import { MDBNavbar, MDBNavbarBrand,  MDBNavbarNav,    MDBNavbarToggler,    MDBCollapse,    MDBNavItem,    MDBIcon,    MDBBtn} from 'mdbreact';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import NavbarRight from '~/Header/components/HeaderNavbarRight/HeaderNavbarRight.jsx';
import authFormReducer from "~/Auth/reducer";

class Header extends Component {

    render() {
        return (
            <header>
                <MDBNavbar className="bg-secondary" dark expand="md" scrolling fixed="top">
                    <MDBNavbarBrand>
                        <Link to="/" className="btn bg-light" data-toggle="tooltip" title="Перейти на главную страницу">Logotip</Link>
                    </MDBNavbarBrand>
                        <NavbarRight userLogged={this.props.isLoggedIn}/>
                </MDBNavbar>
            </header>
        );
    }
}

function mapStateToProps(state) {
    return state.authFormReducer;
}

export default connect(mapStateToProps)(Header);
