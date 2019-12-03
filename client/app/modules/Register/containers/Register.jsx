import './Register.scss';
import { MDBModal, MDBModalBody, MDBBtn, MDBCloseIcon, MDBContainer } from 'mdbreact';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { registerFormClose, authFormToOpen } from '~/modules/Header/actions';
import { sendRequestForRegister, registerClearError } from '~/modules/Register/actions';
import EmailInput from '~/modules/Register/components/EmailInput.jsx';
import PasswordInput from '~/modules/Register/components/PasswordInput.jsx';
import NameInput from '~/modules/Register/components/NameInput.jsx';
import PasswordRepeatInput from '~/modules/Register/components/PasswordRepeatInput.jsx';
import SpinnerPage from "~/libs/components/Loader/Loader";
import Notification from "~/libs/components/Notification/Notification.jsx";

class Register extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        // Очищение ощибок из store, чтобы при повторном открытии модельного окна не показывались старые ошибки
        this.props.dispatch(registerClearError());
    }

    /**
     * Функция обрабатывает нажатие по кнопке СОЗДАТЬ
     * @param {Object} event - объект с данными события формы
     */
    handleSubmit(event) {
        event.preventDefault();
        this.props.dispatch(sendRequestForRegister(this.props.name, this.props.email, this.props.password));
    }

    render() {
        return (
            <>
                <MDBContainer className="container-fluid">
                    <MDBModal isOpen toggle={() => this.props.dispatch(registerFormClose())} className="forms-modal">
                        <MDBModalBody className="forms-modal__body">
                            <div className="forms__close"
                                onClick={() => this.props.dispatch(registerFormClose())}>&times;</div>
                            <form onSubmit={this.handleSubmit} className="text-center forms">
                                {this.props.errorRegister && <Notification className="forms-modal__body" errMessage={this.props.errorRegister}/>}
                                <p className="forms__heading">Зарегистрироваться </p>
                                <div className="d-flex justify-content-center">
                                    <div className="forms-fields text-left">
                                        {this.props.isLoading ? <SpinnerPage /> : null}
                                        <NameInput value={this.props.name} error={this.props.nameValidationError} />
                                        <EmailInput value={this.props.email} error={this.props.emailValidationError} />
                                        <PasswordInput value={this.props.password} error={this.props.passwordValidationError} />
                                        <PasswordRepeatInput value={this.props.passwordRepeat} error={this.props.passwordRepeatValidationError} />
                                        <MDBBtn
                                            className="forms__btn btn rounded-pill"
                                            type="submit"> СОЗДАТЬ
                                        </MDBBtn>
                                    </div>
                                </div>
                                <p className="forms__text">Есть аккуант?&nbsp;
                                    <span className="forms__link"
                                        onClick={() => this.props.dispatch(authFormToOpen())}> Войти</span>
                                </p>
                            </form>
                        </MDBModalBody>
                    </MDBModal>
                </MDBContainer>
            </>
        );
    }

}

function mapStateToProps(state) {
    return state.registerFormReducer;
}

export default connect(mapStateToProps)(Register);