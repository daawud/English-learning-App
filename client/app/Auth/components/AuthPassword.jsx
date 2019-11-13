import React, { Component } from 'react';
import { connect } from 'react-redux';

import { passwordOnBlur } from '~/Auth/actions';
import img from '~/assets/img/passwordEyeIcon.png'

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
        return (
            <>
                <label htmlFor="PasswordForm">ПАРОЛЬ</label>
                <div className="auth-form__input-cover">
                    <input
                        type={this.state.passwordInputType}
                        id="PasswordForm"
                        className="auth-form__input-custom form-control mb-4 "
                        name="password"
                        value={this.props.password}
                        onChange={() => null}
                        onBlur={this.handleChange}
                        maxLength="50"
                        required
                    />
                    <div
                        className='auth-form__show-password'
                        onClick={() => this.setState(
                            {passwordInputType: this.state.passwordInputType === 'password' ? 'text' : 'password'}
                        )}><img src={img} alt=""/>
                    </div>
                </div>
            </>
        );
    }
}

export default connect()(AuthPassword);