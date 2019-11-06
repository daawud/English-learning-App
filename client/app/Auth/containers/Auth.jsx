import './Auth.scss';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import Validator from '~/classes/Validator';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { authOpen, authClose, formFieldsUpdate } from '~/Auth/actions';
import authFormReducer from '~/Auth/reducer';

class Auth extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.authFormToOpen = this.authFormToOpen.bind(this);
        this.authFormToClose = this.authFormToClose.bind(this);
    }

    handleChange(event) {
        let fields = {
            [event.currentTarget.name]: event.target.value,
        };
        this.props.dispatch(formFieldsUpdate(fields));
    }

    handleSubmit(event) {
        event.preventDefault();
        const { email } = this.props;
        let validation = new Validator({email});
    }

    authFormToOpen() {
        this.props.dispatch(authOpen());
    }
    authFormToClose() {
        this.props.dispatch(authClose());
    }

    render() {
        return (
            <>
                <MDBModal isOpen={this.props.authModalOpened} toggle={this.authFormToClose}>
                    <MDBModalBody>
                        <div className="row d-flex mx-3">
                            <div className="col">Войти в личный кабинет</div>
                            <Link to='/'>X</Link>
                        </div>
                        <form onSubmit={this.handleSubmit} className="text-center p-5">
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
                                    ВОЙТИ
                            </button>
                            <Link to="/checkPassword">Восстановить пароль</Link>
                            <div>
                                    Нет личного кабинета? <Link to="/register"> Зарегистрируйся </Link>
                            </div>
                        </form>
                    </MDBModalBody>
                </MDBModal>
            </>
        );
    }

    componentDidMount() {
        this.authFormToOpen();
    }

    componentWillUnmount() {
        this.authFormToClose();
    }
}

function mapStateToProps(state) {
    return state.authFormReducer;
}

export default connect(mapStateToProps)(Auth);
