import './ForgotPassword.scss';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

class ForgotPassword extends Component {
    state = {
        modal: false,
    };

    toggle = () => {
        this.setState({
            modal: !this.state.modal,
        });
    };

    render() {
        return (
            <Router>
                <MDBBtn onClick={this.toggle}>ForgotPassword</MDBBtn>
                <MDBContainer>
                    <MDBModal isOpen={this.state.modal} toggle={this.toggle} id="forgotPasswordFormField">
                        <MDBModalHeader toggle={this.toggle} id="forgotPasswordQuestion">Забыли пароль?</MDBModalHeader>
                        <MDBModalBody>
                            <form>
                                <p className="h6 text-center mb-4" id="forgotPasswordInstruction">
                                    Мы отправим вам инструкции по переустановке пароля по email.
                                </p>
                                <label htmlFor="forgotPasswordFormEmail">
                                    Электронная почта
                                </label>
                                <input
                                    type="email"
                                    id="forgotPasswordFormEmail"
                                    className="form-control"
                                />
                                <br/>
                                <div className="text-center mt-4">
                                    <MDBBtn type="submit" id="forgotPasswordSubmit">Отправить</MDBBtn>
                                </div>
                            </form>
                        </MDBModalBody>
                        <MDBModalFooter>
                            <Link to="/" id="linkFromForgotPasswordToAuth"> Нет личного кабинета?
                                Зарегистрируйся </Link>
                        </MDBModalFooter>
                    </MDBModal>
                </MDBContainer>
            </Router>
        );
    }
}

export default ForgotPassword;
