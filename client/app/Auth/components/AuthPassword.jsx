import React, { Component } from 'react';
import { connect } from 'react-redux';

import { passwordOnBlur } from '~/Auth/actions';


class AuthPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            passwordInputType: 'password',
        };
        this.handleChange = this.handleChange.bind(this);
    }

    /**
     * обрабатывает ввод в поле PASSWORD и отправляет данные в глобальное хранилище при потере "фокуса" с поля
     * @param {Object} event - объект с данными события формы
     */
    handleChange(event) {
        this.props.dispatch(passwordOnBlur( event.target.value));
    }

    render() {
        const eye = (
            <div
                className='auth-form__show-password'
                onClick={() => this.setState(
                    {passwordInputType: this.state.passwordInputType === 'password' ? 'text' : 'password'}
                )}
            ><img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Feather-core-eye.svg/1024px-Feather-core-eye.svg.png"
                    className="auth-form__input-eye"
                    alt=""/>
            </div>
        );

        return (
            <>
                <label htmlFor="PasswordForm">ПАРОЛЬ</label>
                <div className="auth-form__input-cover">
                    <input
                        type={this.state.passwordInputType}
                        id="PasswordForm"
                        className="auth-form__input-custom form-control mb-4 "
                        name="password"
                        onChange={() => null}
                        onBlur={this.handleChange}
                        maxLength="50"
                        required
                    />
                    {eye}
                </div>
            </>
        );
    }
}

export default connect()(AuthPassword);