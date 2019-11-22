import './Auth.scss';
import { MDBModal, MDBModalBody, MDBBtn, MDBCloseIcon, MDBContainer } from 'mdbreact';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { authFormToClose, registerFormOpen, forgotPasswordModalToOpen } from '~/Header/actions';
import { sendRequestForAuth } from '~/Auth/actions';
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
        this.props.dispatch(sendRequestForAuth(this.props.email, this.props.password));
    }

    render() {
        return (
            <MDBContainer className="container-fluid">
                <MDBModal isOpen toggle={() => this.props.dispatch(authFormToClose())} className="forms-modal">
                    <MDBModalBody className="forms-modal__body">
                        <div className="forms__close"
                            onClick={() => this.props.dispatch(authFormToClose())}>&times;</div>
                        <form onSubmit={this.handleSubmit} className="text-center forms">
                            <p className="forms__heading">Войти в учетную запись</p>
                            <div className="d-flex justify-content-center">
                                <div className="forms-fields text-left">
                                    <AuthEmail value={this.props.email}/>
                                    <AuthPassword value={this.props.password}/>
                                    <MDBBtn
                                        className="forms__btn btn btn-block border-white rounded-pill"
                                        type="submit"> ВОЙТИ
                                    </MDBBtn>
                                </div>
                            </div>
                            <p className="forms__link"
                                onClick={() => this.props.dispatch(forgotPasswordModalToOpen())}>Восстановить
                                пароль</p>
                            <p className="forms__text">Нет учетной записи?&nbsp;
                                <span className="forms__link"
                                    onClick={() => this.props.dispatch(registerFormOpen())}> Зарегистрируйся</span>
                            </p>
                        </form>
                    </MDBModalBody>
                </MDBModal>
            </MDBContainer>
        );
    }

}

function mapStateToProps(state) {
    return state.authFormReducer;
}

export default connect(mapStateToProps)(Auth);