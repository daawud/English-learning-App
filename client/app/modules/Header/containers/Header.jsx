import './Header.scss';
import { MDBBtn } from 'mdbreact';

import { MDBNavbar, MDBNavLink, MDBNavbarToggler, MDBCollapse } from 'mdbreact';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import HeaderUserPic from '~/modules/Header/components/HeaderUserPic/HeaderUserPic.jsx';
import SignOutButton from '~/modules/Header/components/SignOutButton/SignOut.jsx';
import AuthForm from '~/modules/Auth/containers/Auth.jsx';
import RegisterForm from '~/modules/Register/containers/Register.jsx';
import ForgotPasswordForm from '~/modules/ForgotPassword/containers/ForgotPassword.jsx';
import { authFormToOpen } from '~/modules/Header/actions';

import man from '~/assets/img/man.svg';
import award from '~/assets/img/award_icon_header.svg';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
        this.toggleCollapse = this.toggleCollapse.bind(this);
    }

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };

    render() {
        let userBlock;

        if (this.props.userIsLogged) {
            userBlock = (
                <div className="user-signed-in">
                    <HeaderUserPic/>
                    <MDBNavLink to="/cabinet" title="Войти в личный кабинет">
                        <MDBBtn className="cabinet-btn">КАБИНЕТ</MDBBtn>
                    </MDBNavLink>
                    <MDBNavLink to="#" title="Выбрать курс обучения">
                        <div>
                            <img src={man} alt="курс"/>
                        </div>
                    </MDBNavLink>
                    <SignOutButton/>
                </div>);
        } else {
            userBlock = (
                <MDBBtn className="sign-in-btn"
                        data-toggle="tooltip"
                        title="Войти в учетную запись"
                        onClick={() => this.props.dispatch(authFormToOpen())}>
                    Войти
                </MDBBtn>
            );
        }

        return (
            <>
                {this.props.authModalOpened && <AuthForm/>}
                {this.props.registerModalOpened && <RegisterForm/>}
                {this.props.forgotPasswordModalOpened && <ForgotPasswordForm/>}
                <MDBNavbar className="header_bg" color="indigo" dark expand="md">
                    <MDBNavLink className="logo-block p-0" to="/"><span className="logo-text">eLA</span></MDBNavLink>
                    <MDBNavbarToggler onClick={this.toggleCollapse}/>
                    <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                        <div className="buttons-set container-fluid d-flex justify-content-center mr-auto">
                            {userBlock}
                        </div>
                    </MDBCollapse>
                </MDBNavbar>
            </>
        );
    }
}

function mapStateToProps(state) {
    return state.headerReducer;
}

export default connect(mapStateToProps)(Header);