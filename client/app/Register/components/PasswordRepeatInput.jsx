import React, { Component } from 'react';
import { connect } from 'react-redux';

import PopUpMessageArrowLeft from '~/components/PopUpMassageArrorLeft/PopUpMessageArrowLeft.jsx';
import img from '~/assets/img/passwordEyeIcon.png'

import { passwordRepeatOnBlur, clearPasswordRepeatErrorMassage } from '~/Register/actions';

class PasswordRepeatInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            passwordInputType: 'password',
        };
        this.onBlurHandler = this.onBlurHandler.bind(this);
        this.onFocusHandler = this.onFocusHandler.bind(this);
    }

    /**
     * обрабатывает ввод в поле PASSWORD REPEAT и отправляет данные в глобальное хранилище при потере "фокуса" с поля
     * @param {Object} event - объект с данными события формы
     */
    onBlurHandler(event) {
        if (event.target.value !== '') {
            this.props.dispatch(passwordRepeatOnBlur( event.target.value));
        }
    }

    /**
     * Функция обрабатывает фокус поля PASSWORD_REPEAT и отправляет запрос на очистку ошибки валидации при фокусе на данном поле
     */
    onFocusHandler() {
        this.props.dispatch(clearPasswordRepeatErrorMassage());
    }

    render() {
        return (
            <>
                <label htmlFor="PasswordFormRepeat">ПОВТОРИТЕ ПАРОЛЬ</label>
                <div className="reg-form__input-cover">
                    <input
                        type={this.state.passwordInputType}
                        id="PasswordFormRepeat"
                        className="form-control mb-3 reg-form__input-custom"
                        name="password_repeat"
                        value={this.props.passwordRepeat}
                        onChange={() => null}
                        onBlur={this.onBlurHandler}
                        onFocus={this.onFocusHandler}
                        maxLength="50"
                        required
                    />
                    <div
                        className='reg-form__show-password'
                        onClick={() => this.setState(
                            {passwordInputType: this.state.passwordInputType === 'password' ? 'text' : 'password'}
                        )}><img className="reg-form__input-eye" src={img} alt="показать пароль"/>
                    </div>
                    {this.props.error
                    && <PopUpMessageArrowLeft message={this.props.error}/>}
                </div>
            </>
        );
    }
}

export default connect()(PasswordRepeatInput);