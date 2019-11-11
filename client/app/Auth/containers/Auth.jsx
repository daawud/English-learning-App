import './Auth.scss';
import { MDBModal, MDBModalBody, MDBPopover, MDBPopoverBody, MDBPopoverHeader, MDBBtn, MDBContainer } from 'mdbreact';

import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { authFormToOpen, authFormToClose, formFieldsUpdate } from '~/Auth/actions';
import authFormReducer from '~/Auth/reducer';
import EmailInput from '~/Auth/components/EmailInput.jsx'
import PasswordInput from '~/Auth/components/PasswordInput.jsx';

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            passwordInputType: 'password',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /**
     * обрабатывает ввод в поле INPUT и отправляет данные в глобальное хранилище при потере "фокуса" с поля
     * @param {Object} event - объект с данными события формы
     */
    handleChange(event) {
        this.props.dispatch(formFieldsUpdate({
            key: event.currentTarget.name,
            value: event.target.value
        }));
    }

    /**
     * Функция обрабатывает нажатие по кнопке ВОЙТИ
     * @param {Object} event - объект с данными события формы
     */
    handleSubmit(event) {
        event.preventDefault();
        // Далее подключаем логику с БД
    }

    render() {
        return (
            <>
                <MDBModal isOpen={this.props.authModalOpened} toggle={() => this.props.dispatch(authFormToClose())}>
                    {!this.props.authModalOpened && <Redirect to="/"/>}
                    <MDBModalBody>
                        <div className="text-right close-form p-0 m-0" onClick={() => this.props.dispatch(authFormToClose())}>&times;</div>
                        <form onSubmit={this.handleSubmit} className="text-center px-5">
                            <p className="">Войти в личный кабинет</p>

                            <EmailInput handleChange={this.handleChange}/>
                            <PasswordInput handleChange={this.handleChange}/>

                            <button className="btn btn-info btn-block my-4" type="submit"> ВОЙТИ</button>
                            <Link to="/reset_password">Восстановить пароль</Link>
                            <p>Нет личного кабинета? <Link to="/register">Зарегистрируйся</Link></p>
                        </form>
                    </MDBModalBody>
                </MDBModal>
            </>
        );
    }

    componentDidMount() {
        this.props.dispatch(authFormToOpen());
    }

    componentWillUnmount() {
        this.props.dispatch(authFormToClose());
    }
}

function mapStateToProps(state) {
    return state.authFormReducer;
}

export default connect(mapStateToProps)(Auth);