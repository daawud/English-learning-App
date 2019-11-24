import { MDBModal, MDBModalBody, MDBBtn, MDBContainer } from 'mdbreact';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { forgotPasswordModalToClose, registerFormOpen } from '~/modules/Header/actions';
import ForgotPasswordEmail from '~/modules/ForgotPassword/components/ForgotPasswordEmail.jsx';

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
                <MDBContainer className="container-fluid">
                    <MDBModal isOpen toggle={() => this.props.dispatch(forgotPasswordModalToClose())} className="forms-modal">
                        <MDBModalBody className="forms-modal__body">
                            <div className="forms__close"
                                onClick={() => this.props.dispatch(forgotPasswordModalToClose())}>&times;</div>
                            <form onSubmit={this.handleSubmit} className="text-center forms">
                                <p className="forms__heading">Забыли пароль?</p>
                                <p className="forms__heading-small text-center my-5">
                                    Мы отправим Вам новый пароль.
                                </p>
                                <div className="d-flex justify-content-center">
                                    <div className="forms-fields text-left">
                                        <ForgotPasswordEmail value={this.props.email}/>
                                        <MDBBtn
                                            className="forms__btn btn btn-block border-white rounded-pill"
                                            type="submit"> ОТПРАВИТЬ
                                        </MDBBtn>
                                    </div>
                                </div>
                                <p className="forms__text">Нет личного кабинета? &nbsp;
                                    <span className="forms__link"
                                        onClick={() => this.props.dispatch(registerFormOpen())}> Зарегистрируйся</span>
                                </p>
                            </form>
                        </MDBModalBody>
                    </MDBModal>
                </MDBContainer>
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