import './Register.scss';
import { MDBModal, MDBModalBody, MDBCloseIcon, MDBBtn } from 'mdbreact';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { registerFormClose, authFormToOpen } from '~/Header/actions';
import { sendRequestForRegister } from '~/TokenHandler/actions';
import EmailInput from '~/Register/components/EmailInput.jsx';
import PasswordInput from '~/Register/components/PasswordInput.jsx';
import NameInput from '~/Register/components/NameInput.jsx';
import PasswordRepeatInput from '~/Register/components/PasswordRepeatInput.jsx';


class Register extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /**
     * Функция обрабатывает нажатие по кнопке СОЗДАТЬ
     * @param {Object} event - объект с данными события формы
     */
    handleSubmit(event) {
        event.preventDefault();
        this.props.dispatch(sendRequestForRegister());
        // Далее подключаем логику с БД
        // После положительного ответа от сервера стираем данные полей из редюсера - создаем доп экшны
    }

    render() {
        return (
            <>
                <MDBModal isOpen toggle={() => this.props.dispatch(registerFormClose())} className="reg-modal">
                    <MDBModalBody className="reg-modal__body">
                        <form onSubmit={this.handleSubmit} className="text-center px-5 position-relative reg-form">
                            <h5 className="mt-2 mb-5">Зарегистрироваться</h5>
                            <MDBCloseIcon className="reg-form__close" onClick={() => this.props.dispatch(registerFormClose())} />
                            <NameInput value={this.props.name} error={this.props.nameValidationError} />
                            <EmailInput value={this.props.email} error={this.props.emailValidationError} />
                            <PasswordInput value={this.props.password} error={this.props.passwordValidationError} />
                            <PasswordRepeatInput value={this.props.passwordRepeat} error={this.props.passwordRepeatValidationError} />
                            <MDBBtn
                                className="col-md-6 offset-md-3 btn btn-dark btn-block my-4 border-white rounded-pill"
                                type="submit"> СОЗДАТЬ </MDBBtn>
                            <div>Есть аккуант? <span className="reg-form__link"
                                onClick={() => this.props.dispatch(authFormToOpen())}> Войти </span>
                            </div>
                        </form>
                    </MDBModalBody>
                </MDBModal>
            </>
        );
    }

}

function mapStateToProps(state) {
    return state.registerFormReducer;
}

export default connect(mapStateToProps)(Register);