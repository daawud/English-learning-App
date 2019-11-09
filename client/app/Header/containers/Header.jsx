import './Header.scss';
import React, {Component} from 'react';
import {  Link } from 'react-router-dom';

import HeaderUserPic from "~/Header/components/HeaderUserPic/HeaderUserPic.jsx";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userIsLogged: false,
        }
    }

    render() {
        return (
            <header className="bg-secondary d-flex justify-content-between align-items-center" >
                <div>
                    <Link to="/" className="btn bg-light" data-toggle="tooltip" title="Перейти на главную страницу">Logotip</Link>
                </div>
                <div>
                    { (this.state.userIsLogged) ?
                        <>
                            <span className="text-white" data-toggle="tooltip" title="Количество доступных очков для открытия новых уроков">100</span>
                            <HeaderUserPic />
                            <Link to="/cabinet"><button className="btn bg-light" data-toggle="tooltip" title="Войти в личный кабинет">Войти в личный кабинет</button></Link>
                        </>
                         :
                        <Link to="/auth" className="btn bg-light" data-toggle="tooltip" title="Войти в учетную запись">Войти</Link>
                    }
                </div>
            </header>
        );
    }
}

export default Header;
