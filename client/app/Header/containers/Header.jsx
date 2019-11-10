import './Header.scss';
import {MDBNavbarBrand} from 'mdbreact';
import React, {Component} from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import HeaderUserPic from '~/Header/components/HeaderUserPic/HeaderUserPic.jsx';
import AuthForm from '~/Auth/containers/Auth.jsx';
import RegisterForm from '~/Register/containers/Register.jsx';
import ForgotPasswordForm from '~/ForgotPassword/containers/ForgotPassword.jsx';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userIsLogged: false,
        }
    }

    render() {
        let userBlock;

        if (this.state.userIsLogged) {
            userBlock = (
                <>
                    <span className="text-white" data-toggle="tooltip" title="Количество доступных очков для открытия новых уроков">100</span>
                    <HeaderUserPic />
                    <Link to="/cabinet" className="btn bg-light" data-toggle="tooltip" title="Войти в личный кабинет">Войти в личный кабинет</Link>
                </>)
        } else {
            userBlock = (<Link to="/auth" className="btn bg-light" data-toggle="tooltip" title="Войти в учетную запись">Войти</Link>);
        }

        return (
            <header className="bg-secondary d-flex justify-content-between align-items-center" >
                <MDBNavbarBrand>
                    <Link to="/" className="btn bg-light" data-toggle="tooltip" title="Перейти на главную страницу">Logotip</Link>
                </MDBNavbarBrand>
                <div>
                    {userBlock}
                </div>

                <Switch>
                    <Route path="/auth" component={AuthForm}/>
                    <Route path="/register" component={RegisterForm}/>
                    <Route path="/reset_password" component={ForgotPasswordForm}/>
                </Switch>
            </header>

        );
    }
}

export default Header;
