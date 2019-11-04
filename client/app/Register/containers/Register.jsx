import './Register.scss';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import Validator from '~/validations/Validator';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            name: '',
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
        console.log('ввели в поля:');
        console.log(fields);
        let validation = new Validator(fields);
        console.log(`общая проверка всей формы - ${validation.valid}`);
        console.log('ошибки по форме в строке ниже:');
        console.log(validation.errorsLog);
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
                    НАЧАТЬ
                </MDBBtn>
                <MDBContainer>
                    <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                        <MDBModalHeader toggle={this.toggle}>Зарегистрироваться</MDBModalHeader>
                        <MDBModalBody>
                            <form onSubmit={this.handleSubmit} className="text-center p-5">
                                <label htmlFor="nameLogingForm">ИМЯ</label>
                                <input
                                    type="text"
                                    id="nameLogingForm"
                                    className="form-control mb-4"
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                />
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
                                    СОЗДАТЬ
                                </button>
                                <div>
                                    Есть аккуант? <Link to="/auth"> Войти </Link>
                                </div>
                            </form>
                        </MDBModalBody>
                    </MDBModal>
                </MDBContainer>
            </>
        );
    }
}

export default Register;
