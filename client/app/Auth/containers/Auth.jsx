import './Auth.scss';
import { MDBModal, MDBModalBody, MDBCloseIcon, MDBBtn } from 'mdbreact';

import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { authFormToOpen, authFormToClose } from '~/Auth/actions';
import AuthEmail from '~/Auth/components/AuthEmail.jsx'
import AuthPassword from '~/Auth/components/AuthPassword.jsx';

class Auth extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
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
                <MDBModal
                    isOpen={this.props.authModalOpened}
                    toggle={() => this.props.dispatch(authFormToClose())}
                    className="auth-modal"
                >
                    {!this.props.authModalOpened && <Redirect to="/"/>}
                    <MDBModalBody className="auth-modal__body">
                        <form onSubmit={this.handleSubmit}
                            className="text-center px-5 position-relative auth-form">
                            <h5 className="mt-2 mb-5">Войти в учетную запись</h5>
                            <MDBCloseIcon
                                className="auth-form__close"
                                onClick={() => this.props.dispatch(authFormToClose())}/>
                            <AuthEmail/>
                            <AuthPassword/>
                            <button
                                className="col-md-6 offset-md-3 btn btn-dark btn-block my-4 border-white rounded-pill"
                                type="submit"> ВОЙТИ
                            </button>
                            <Link className="auth-form__link" to="/reset_password">Восстановить пароль</Link>
                            <p>Нет личного кабинета? <Link className="auth-form__link"
                                to="/register">Зарегистрируйся</Link></p>
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