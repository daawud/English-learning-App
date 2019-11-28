import './Header.scss';
import { MDBBtn, MDBPopover, MDBPopoverBody } from 'mdbreact';

import { MDBNavbar, MDBNavLink, MDBNavbarToggler, MDBCollapse } from 'mdbreact';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import HeaderUserPic from '~/modules/Header/components/HeaderUserPic/HeaderUserPic.jsx';
import AuthForm from '~/modules/Auth/containers/Auth.jsx';
import RegisterForm from '~/modules/Register/containers/Register.jsx';
import ForgotPasswordForm from '~/modules/ForgotPassword/containers/ForgotPassword.jsx';
import { authFormToOpen, headerGetData, userLogOut } from '~/modules/Header/actions';
import Tokens from '~/libs/api/Tokens';

import award from '~/assets/img/award_icon_header.svg';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
        this.toggleCollapse = this.toggleCollapse.bind(this);
        this.logOutHandler = this.logOutHandler.bind(this);
    }

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };

    componentDidMount() {
        // Проверка наличия токенов при первой загрузке компонента
        const tokenLS = Tokens.getFromLocalStorage();

        if (tokenLS['token']) {
            this.props.dispatch(headerGetData());
        }
    };

    logOutHandler(){
        Tokens.removeTokensFromLocalStorage();
        this.props.dispatch(userLogOut());
    };

    render() {
        let userBlock;

        if (this.props.userIsLogged) {
            userBlock = (
                <div className="user-signed-in">
                    <MDBBtn>
                        <div className="header-award d-flex justify-content-between align-items-center p-3"
                             data-toggle="tooltip" title="Количество доступных очков для открытия новых уроков">
                            <img src={award} alt="награда"/>
                            <div className="header-award__score">{this.props.data.points}</div>
                        </div>
                    </MDBBtn>
                    <MDBNavLink to="/cabinet" title="Войти в личный кабинет">
                        <MDBBtn className="cabinet-btn">КАБИНЕТ</MDBBtn>
                    </MDBNavLink>
                    <HeaderUserPic userData={this.props.data}/>
                    <MDBPopover placement="bottom" popover hover>
                        <MDBNavLink to="/">
                            <MDBBtn className="sign-out-btn" onClick={this.logOutHandler}>
                                Выйти
                            </MDBBtn>
                        </MDBNavLink>
                        <MDBPopoverBody>
                            Выйти из личного кабинета
                        </MDBPopoverBody>
                    </MDBPopover>
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