import './Auth.scss';
import { MDBModal, MDBModalBody } from 'mdbreact';
import Validator from '~/classes/Validator';

import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { authOpen, authClose, formFieldsUpdate, showPassword } from '~/Auth/actions';
import authFormReducer from '~/Auth/reducer';

class Auth extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /**
     * обрабатывает вводе в поле INPUT и отправляет данные в глобальное хранилище при потере "фокуса" с поля
     * @param event
     */
    handleChange(event) {
        this.props.dispatch(formFieldsUpdate({[event.currentTarget.name]: event.target.value}));
    }

    /**
     * обрабатывает нажатие по сабмиту
     * @param event
     */
    handleSubmit(event) {
        event.preventDefault();
        // логика с БД
    }

    /**
     * Функция render
     * Строка <Redirect to="/" /> сработает в случае клика мышью в стороне от модального окна
     * @returns {*}
     */
    render() {
        return (
            <>
                <MDBModal isOpen={this.props.authModalOpened} toggle={() => this.props.dispatch(authClose())}>
                    {!this.props.authModalOpened && <Redirect to="/"/>}
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
                                className={this.props.emailValidationError ? 'form-control mb-2 is-invalid' : 'form-control mb-5'}
                                name="email"
                                onChange={() => null}
                                onBlur={this.handleChange}
                            />
                            {this.props.emailValidationError
                            && <div className="small text-danger mb-2 ">{this.props.emailValidationError}</div>}
                            <div className="password_input">
                                <label htmlFor="PasswordForm">ПАРОЛЬ</label>
                                <input
                                    type={this.props.typeOfPasswordInput}
                                    id="PasswordForm"
                                    className="form-control mb-4"
                                    name="password"
                                    onChange={() => null}
                                    onBlur={this.handleChange}
                                    required
                                />
                                <div
                                    className='show-password'
                                    onClick={() => this.props.dispatch(showPassword(this.props.typeOfPasswordInput))}
                                >O</div>
                            </div>
                            {this.props.passwordValidationError
                            && <div className="small text-danger mb-2 ">{this.props.passwordValidationError}</div>}
                            <button className="btn btn-info btn-block my-4" type="submit">
                                ВОЙТИ
                            </button>
                            <Link to="/reset_password">Восстановить пароль</Link>
                            <p>
                                Нет личного кабинета? <Link to="/register"> Зарегистрируйся </Link>
                            </p>
                        </form>
                    </MDBModalBody>
                </MDBModal>
            </>
        );
    }

    componentDidMount() {
        this.props.dispatch(authOpen());
    }

    componentWillUnmount() {
        this.props.dispatch(authClose());
    }
}

function mapStateToProps(state) {
    return state.authFormReducer;
}

export default connect(mapStateToProps)(Auth);