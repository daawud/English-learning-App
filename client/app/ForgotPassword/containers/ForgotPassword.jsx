import './ForgotPassword.scss';
import { MDBModal, MDBModalBody, MDBCloseIcon, MDBBtn } from 'mdbreact';

import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { forgotPasswordModalToOpen, forgotPasswordModalToClose, emailOnBlur } from '~/ForgotPassword/actions';
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
    }

    render() {
        return (
            <>
                <MDBModal isOpen={this.props.forgotPasswordModalOpened}
                          toggle={() => this.props.dispatch(forgotPasswordModalToClose())}
                          className="forgot-password-modal">
                    {!this.props.forgotPasswordModalOpened && <Redirect to="/"/>}
                    <MDBModalBody className="forgot-password-modal__body">
                        <form onSubmit={this.handleSubmit}
                              className="text-center px-5 position-relative forgot-password-form">
                            <h5 className="mt-2 mb-5">Забыли пароль?</h5>
                            <MDBCloseIcon className="forgot-password-form__close"
                                          onClick={() => this.props.dispatch(forgotPasswordModalToClose())}/>
                            <p className="h6 text-center mb-4">
                                Мы отправим на Вашу электронную почту новый пароль
                            </p>
                            <ForgotPasswordEmail value={this.props.value}/>
                            <MDBBtn
                                className="col-md-6 offset-md-3 btn btn-dark btn-block my-4 border-white rounded-pill"
                                type="submit">
                                ОТПРАВИТЬ
                            </MDBBtn>
                        </form>
                        <p className="text-center"> Нет личного кабинета?
                            <Link className="forgot-password-form__link" to="/register"> Зарегистрируйся </Link>
                        </p>
                    </MDBModalBody>
                </MDBModal>
            </>
        );
    }

    componentDidMount() {
        this.props.dispatch(forgotPasswordModalToOpen());
    }

    componentWillUnmount() {
        this.props.dispatch(forgotPasswordModalToClose());
    }
}

function mapStateToProps(state) {
    return state.forgotPasswordReducer;
}

export default connect(mapStateToProps)(ForgotPassword);
