import './ForgotPassword.scss';
import { MDBModal, MDBModalBody, MDBCloseIcon, MDBBtn } from 'mdbreact';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { forgotPasswordModalToClose, registerFormOpen } from '~/Header/actions';
import ForgotPasswordEmail from '~/ForgotPassword/components/ForgotPasswordEmail.jsx';

class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /**
     * Метод, обрабатывающий нажатие на кнопку ОТПРАВИТЬ
     */
    handleSubmit(event) {
        event.preventDefault();
        // Далее подключаем логику с БД
        // После положительного ответа от сервера стираем данные полей из редюсера - создаем доп экшны
    }

    render() {
        return (
            <>
                <MDBModal isOpen toggle={() => this.props.dispatch(forgotPasswordModalToClose())} className="forgot-password-modal">
                    <MDBModalBody className="forgot-password-modal__body">
                        <form onSubmit={this.handleSubmit}
                            className="text-center px-5 position-relative forgot-password-form">
                            <h5 className="mt-2 mb-5">Забыли пароль?</h5>
                            <MDBCloseIcon className="forgot-password-form__close"
                                onClick={() => this.props.dispatch(forgotPasswordModalToClose())}/>
                            <p className="h6 text-center mb-4">
                                Мы отправим на Вашу электронную почту новый пароль
                            </p>
                            <ForgotPasswordEmail value={this.props.email}/>
                            <MDBBtn
                                className="col-md-6 offset-md-3 btn btn-dark btn-block my-4 border-white rounded-pill"
                                type="submit">
                                ОТПРАВИТЬ
                            </MDBBtn>
                        </form>
                        <p className="text-center"> Нет личного кабинета?
                            <span className="forgot-password-form__link"
                                onClick={() => this.props.dispatch(registerFormOpen())}> Зарегистрируйся </span>
                        </p>
                    </MDBModalBody>
                </MDBModal>
            </>
        );
    }

    componentWillUnmount() {
        this.props.dispatch(forgotPasswordModalToClose());
    }
}

function mapStateToProps(state) {
    return state.forgotPasswordReducer;
}

export default connect(mapStateToProps)(ForgotPassword);