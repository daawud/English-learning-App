import './Register.scss';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import Validator from '~/classes/Validator';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { registerOpen, registerClose, formFieldsUpdate } from '~/Register/actions';
import registerFormReducer from '~/Register/reducer';


class Register extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.registerFormToOpen = this.registerFormToOpen.bind(this);
        this.registerFormToClose = this.registerFormToClose.bind(this);
    }

    handleChange(event) {
        let fields = {
            [event.currentTarget.name]: event.target.value,
        };
        this.props.dispatch(formFieldsUpdate(fields));
    }

    handleSubmit(event) {
        event.preventDefault();
        const { name, email } = this.props;
        let validation = new Validator({name, email});
    }

    registerFormToOpen() {
        this.props.dispatch(registerOpen());
    }
    registerFormToClose() {
        this.props.dispatch(registerClose());
    }

    render() {
        return (
            <>
                <MDBModal isOpen={this.props.registerModalOpened} toggle={this.registerFormToClose}>
                    <MDBModalBody>
                        <div className="row d-flex mx-3">
                            <div className="col">Зарегистрироваться</div>
                            <Link to='/'>X</Link>
                        </div>
                        <form onSubmit={this.handleSubmit} className="text-center p-5">
                            <label htmlFor="nameLoggingForm">ИМЯ</label>
                            <input
                                type="text"
                                id="nameLoggingForm"
                                className="form-control mb-4"
                                name="name"
                                value={this.props.name}
                                onChange={this.handleChange}
                            />
                            <label htmlFor="EmailLoggingForm">ЭЛЕКТРОННАЯ ПОЧТА / ЛОГИН</label>
                            <input
                                type="email"
                                id="EmailLoggingForm"
                                className="form-control mb-4"
                                name="email"
                                value={this.props.email}
                                onChange={this.handleChange}
                            />
                            <label htmlFor="PasswordForm">ПАРОЛЬ</label>
                            <input
                                type="password"
                                id="PasswordForm"
                                className="form-control mb-4"
                                name="password"
                                value={this.props.password}
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
            </>
        );
    }
    componentDidMount() {
        this.registerFormToOpen();
    }

    componentWillUnmount() {
        this.registerFormToClose();
    }
}

function mapStateToProps(state) {
    return state.registerFormReducer;
}

export default connect(mapStateToProps)(Register);
