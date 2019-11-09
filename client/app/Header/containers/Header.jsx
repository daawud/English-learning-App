import './Header.scss';
import {MDBNavbarBrand} from 'mdbreact';
import React, {Component} from 'react';
import {  Link } from 'react-router-dom';

import HeaderUserPic from "~/Header/components/HeaderUserPic/HeaderUserPic.jsx";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userIsLogged: true,
        }
    }

    render() {
        let loginUser;
        if (this.state.userIsLogged) {
            loginUser = (
                <>
                    <span className="text-white" data-toggle="tooltip" title="Количество доступных очков для открытия новых уроков">100</span>
                    <HeaderUserPic />
                    <Link to="/cabinet" className="btn bg-light" data-toggle="tooltip" title="Войти в личный кабинет">Войти в личный кабинет</Link>
                </>)
            } else {
                loginUser = (<Link to="/auth" className="btn bg-light" data-toggle="tooltip" title="Войти в учетную запись">Войти</Link>);
            }

        return (
            <header className="bg-secondary d-flex justify-content-between align-items-center" >
                <MDBNavbarBrand>
                    <Link to="/" className="btn bg-light" data-toggle="tooltip" title="Перейти на главную страницу">Logotip</Link>
                </MDBNavbarBrand>
                <div>
                    {loginUser}
                </div>
            </header>
        );
    }
}

export default Header;
