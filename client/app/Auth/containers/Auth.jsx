import './Auth.scss';
import { MDBModal, MDBModalBody, MDBCloseIcon, MDBBtn } from 'mdbreact';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { authFormToClose, registerFormOpen, forgotPasswordModalToOpen } from '~/Header/actions';
import { sendRequestForAuth } from '~/TokenHandler/actions';
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
        this.props.dispatch(sendRequestForAuth());
        // Далее подключаем логику с БД
        // После положительного ответа от сервера стираем данные полей из редюсера - создаем доп экшны
    }

    render() {
        return (
            <>
                <MDBModal isOpen toggle={() => this.props.dispatch(authFormToClose())} className="auth-modal">
                    <MDBModalBody className="auth-modal__body">
                        <form onSubmit={this.handleSubmit} className="text-center px-5 position-relative auth-form">
                            <h5 className="mt-2 mb-5">Войти в учетную запись</h5>
                            <MDBCloseIcon className="auth-form__close" onClick={() => this.props.dispatch(authFormToClose())}/>
                            <AuthEmail value={this.props.email}/>
                            <AuthPassword value={this.props.password}/>
                            <MDBBtn
                                className="col-md-6 offset-md-3 btn btn-dark btn-block my-4 border-white rounded-pill"
                                type="submit"> ВОЙТИ
                            </MDBBtn>
                            <p className="auth-form__link" 
                                onClick={() => this.props.dispatch(forgotPasswordModalToOpen())}>Восстановить пароль</p>
                            <p>Нет личного кабинета? &nbsp;
                                <span className="auth-form__link" 
                                    onClick={() => this.props.dispatch(registerFormOpen())}> Зарегистрируйся</span></p>
                        </form>
                    </MDBModalBody>
                </MDBModal>
            </>
        );
    }

}

function mapStateToProps(state) {
    return state.authFormReducer;
}

export default connect(mapStateToProps)(Auth);