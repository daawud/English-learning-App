import './Header.scss';
import { MDBNavbarBrand } from 'mdbreact';
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import HeaderUserPic from '~/Header/components/HeaderUserPic/HeaderUserPic.jsx';
import AuthForm from '~/Auth/containers/Auth.jsx';
import RegisterForm from '~/Register/containers/Register.jsx';
import ForgotPasswordForm from '~/ForgotPassword/containers/ForgotPassword.jsx';
import { authFormToOpen } from '~/Header/actions';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let userBlock;

        if (this.props.userIsLogged) {
            userBlock = (
                <>
                    <span className="text-white" data-toggle="tooltip" title="Количество доступных очков для открытия новых уроков">100</span>
                    <HeaderUserPic />
                    <Link to="/cabinet" className="btn bg-light" data-toggle="tooltip" title="Войти в личный кабинет">Войти в личный кабинет</Link>
                </>)
        } else {
            userBlock = (
                <button className="btn bg-light"
                    data-toggle="tooltip"
                    title="Войти в учетную запись"
                    onClick={() => this.props.dispatch(authFormToOpen())}>
                    Войти
                </button>
            );
        }

        return (
            <header className="bg-secondary d-flex justify-content-between align-items-center">
                {this.props.authModalOpened && <AuthForm />}
                {this.props.registerModalOpened && <RegisterForm />}
                {this.props.forgotPasswordModalOpened && <ForgotPasswordForm />}
                <MDBNavbarBrand>
                    <Link to="/" className="btn bg-light" data-toggle="tooltip" title="Перейти на главную страницу">Logotip</Link>
                </MDBNavbarBrand>
                <div>
                    {userBlock}
                </div>
            </header>
        );
    }
}

function mapStateToProps(state) {
    return state.headerReducer;
}

export default connect(mapStateToProps)(Header);
