import './Header.scss';
import React, {Component} from 'react';
import { MDBNavbar, MDBNavbarBrand,  MDBNavbarNav,    MDBNavbarToggler,    MDBCollapse,    MDBNavItem,    MDBIcon,    MDBBtn} from 'mdbreact';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import NavbarRight from '~/components/HeaderNavbarRight/HeaderNavbarRight.jsx';
import registerFormReducer from '~/components/Register/reducer.js';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse
        });
    }

    render() {
        return (
            <div>
                <Router>
                    <header>
                        <MDBNavbar className="bg-secondary" dark expand="md" scrolling fixed="top">
                            <MDBNavbarBrand>
                                <Link to="/" className="btn bg-light" data-toggle="tooltip" title="Перейти на главную страницу">Logotip</Link>
                            </MDBNavbarBrand>
                            <MDBNavbarToggler onClick={ this.onClick } />
                            <MDBCollapse isOpen = { this.state.collapse } navbar>
                                <NavbarRight userLogged={this.props.userAuthenticateStatus}/>
                            </MDBCollapse>
                        </MDBNavbar>
                    </header>
                </Router>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        userAuthenticateStatus: state.registerFormReducer.isLoggedIn,
    }
}

export default connect(mapStateToProps)(Header);
