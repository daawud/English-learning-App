import './Auth.scss';
import {MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter} from 'mdbreact';
import Validator from '~/classes/Validator';

import React, {Component} from 'react';
import {Redirect, Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {authOpen, authClose, formFieldsUpdate, fieldValidationErrors} from '~/Auth/actions';
import authFormReducer from '~/Auth/reducer';

class Auth extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validation = this.validation.bind(this);
    }

    /**
     * обрабатывает вводе в поле INPUT и отправляет данные в глобальное хранилище при потере "фокуса" с поля
     * @param event
     */
    handleChange(event) {
        const filed = {
            name: event.currentTarget.name,
            value: event.target.value,
        };
        this.props.dispatch(formFieldsUpdate(filed));
        this.validation(new Validator({[event.currentTarget.name]: event.target.value}));
    }

    /**
     * обрабатывает нажатие по сабмиту
     * @param event
     */
    handleSubmit(event) {
        event.preventDefault();
        this.validation(new Validator({email: this.props.email}));
    }

    /**
     * общая функция для валидации
     * @param validation (object) - объект с полями
     */
    validation(validation) {
        if (validation.isValid) {
            this.props.dispatch(fieldValidationErrors({errorsLog: ''}));
            // далее логика авторизации через сервер
        } else {
            this.props.dispatch(fieldValidationErrors(validation.errorsLog));
        }
    }

    /**
     * Строка <Redirect to="/" /> сработает в случае клика мышью в стороне от модального окна
     */
    render() {
        return (
            <>
                <MDBModal isOpen={this.props.authModalOpened} toggle={() => this.props.dispatch(authClose())}>
                    {!this.props.authModalOpened && <Redirect to="/" />}
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
                                className={this.props.emailError ? 'form-control mb-2 is-invalid' : 'form-control mb-5'}
                                name="email"
                                onChange={() => null}
                                onBlur={this.handleChange}
                            />
                            {this.props.emailError
                            && <div className="small text-danger mb-2 ">{this.props.emailError}</div>}
                            <label htmlFor="PasswordForm">ПАРОЛЬ</label>
                            <input
                                type="password"
                                id="PasswordForm"
                                className="form-control mb-4"
                                name="password"
                                onChange={() => null}
                                onBlur={this.handleChange}
                                required
                            />
                            <button className="btn btn-info btn-block my-4" type="submit">
                                ВОЙТИ
                            </button>
                            <Link to="/reset_password">Восстановить пароль</Link>
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