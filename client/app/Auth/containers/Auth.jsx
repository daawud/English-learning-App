//import './Auth.scss';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import Validator from '~/validations/Validator';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            email: '',
            password: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggle = () => {
        this.setState({
            ...this.state,
            modal: !this.state.modal,
        });
    };

    handleChange(event) {
        let fields = {
            [event.currentTarget.name]: event.target.value,
        };
        this.setState({ modal: this.state.modal, ...fields });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { modal, ...fields } = this.state;
        let validation = new Validator(fields);
        if (validation.errorsLog) {
            this.setState({
                ...this.state,
                errorsLog: validation.errorsLog,
            });
        }
    }

    render() {
        return (
            <>
                <MDBBtn onClick={this.toggle} className="border">
                    ПРОДОЛЖИТЬ
                </MDBBtn>
                <MDBContainer>
                    <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                        <MDBModalHeader toggle={this.toggle}>Войти в личный кабинет</MDBModalHeader>
                        <MDBModalBody>
                            <form onSubmit={this.handleSubmit} className="text-center p-5">
                                <label htmlFor="EmailLogingForm">ЭЛЕКТРОННАЯ ПОЧТА / ЛОГИН</label>
                                <input
                                    type="email"
                                    id="EmailLogingForm"
                                    className="form-control mb-4"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                />
                                <label htmlFor="PasswordForm">ПАРОЛЬ</label>
                                <input
                                    type="password"
                                    id="PasswordForm"
                                    className="form-control mb-4"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />
                                <button className="btn btn-info btn-block my-4" type="submit">
                                    ВОЙТИ
                                </button>
                                <Link to="/checkPassword">Восстановить пароль</Link>
                                <div>
                                    Нет личного кабинета? <Link to="/register"> Зарегистрируйся </Link>
                                </div>
                            </form>
                        </MDBModalBody>
                    </MDBModal>
                </MDBContainer>
            </>
        );
    }
}

export default Auth;
