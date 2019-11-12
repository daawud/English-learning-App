import './ForgotPassword.scss';
import { MDBModal, MDBModalBody, MDBCloseIcon, MDBBtn } from 'mdbreact';

import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { forgotPasswordModalToOpen, forgotPasswordModalToClose, emailOnBlur } from '~/ForgotPassword/actions';
import { forgotPasswordReducer } from '~/ForgotPassword/reducer';
import { handleChange, handleSubmit } from '~/ForgotPassword/helpers';

class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /**
     * Метод, обрабатывающий ввод в поле INPUT и отправляющий данные в глобальное хранилище при потере "фокуса" с поля
     * @param {Object} event - объект с данными события формы
     */
    handleChange(event) {
        this.props.dispatch(emailOnBlur(event.target.value));
    }

    /**
     * Метод, обрабатывающий нажатие по сабмиту
     * @param {Object} event - объект с данными события формы
     */
    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <>
                <MDBModal isOpen={this.props.forgotPasswordModalOpened}
                          toggle={() => this.props.dispatch(forgotPasswordModalToClose())}>
                    {!this.props.forgotPasswordModalOpened && <Redirect to="/"/>}
                    <MDBModalBody>
                        <p className="text-center">Забыли пароль?
                            <MDBCloseIcon
                                onClick={() => this.props.dispatch(forgotPasswordModalToClose())}>&times;
                            </MDBCloseIcon>
                        </p>
                        <form onSubmit={this.handleSubmit} className="text-center p-5">
                            <p className="h6 text-center mb-4">
                                Мы отправим на Вашу электронную почту новый пароль
                            </p>
                            <label htmlFor="forgotPasswordFormEmail">
                                ЭЛЕКТРОННАЯ ПОЧТА
                            </label>
                            <input
                                className="form-control mb-4"
                                type="email"
                                maxLength="50"
                                id="forgotPasswordFormEmail"
                                onChange={() => null}
                                onBlur={this.handleChange}
                                required
                            />
                            <br/>
                            <MDBBtn className="btn btn-info btn-block my-4" type="submit">
                                Отправить
                            </MDBBtn>
                        </form>
                        <p className="text-center"> Нет личного кабинета?
                            <Link to="/register"> Зарегистрируйся </Link>
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
