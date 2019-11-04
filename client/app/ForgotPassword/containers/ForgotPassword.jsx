import './ForgotPassword.scss';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
            <>
                <MDBBtn onClick={this.toggle}>ForgotPassword</MDBBtn>
                <MDBContainer>
                    <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                        <MDBModalHeader toggle={this.toggle}>Забыли пароль?</MDBModalHeader>
                        <MDBModalBody>
                            <form>
                                <p className="h6 text-center mb-4">
                                    Мы отправим вам инструкции по переустановке пароля по email.
                                </p>
                                <label htmlFor="forgotPasswordFormEmail">Электронная почта</label>
                                <input type="email" id="forgotPasswordFormEmail" className="form-control" />
                                <br />
                                <div className="text-center mt-4">
                                    <MDBBtn type="submit">Отправить</MDBBtn>
                                </div>
                            </form>
                        </MDBModalBody>
                        <MDBModalFooter>
                            <Link to="/"> Нет личного кабинета? Зарегистрируйся </Link>
                        </MDBModalFooter>
                    </MDBModal>
                </MDBContainer>
            </>
        );
    }
}

export default ForgotPassword;
