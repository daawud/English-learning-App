import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Manager, Reference, Popper } from 'react-popper';

import {Arrow} from '~/Register/Arrows/Arrows';
import passwordEyeOpen from '~/assets/img/passwordEyeOpen.svg';
import passwordEyeClose from '~/assets/img/passwordEyeClose.svg';

import { passwordRepeatOnChange, passwordRepeatOnBlur, clearPasswordRepeatErrorMassage } from '~/Register/actions';

class PasswordRepeatInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            passwordInputType: 'password',
        };
        this.onBlurHandler = this.onBlurHandler.bind(this);
        this.onFocusHandler = this.onFocusHandler.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
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

    /**
     * обрабатывает ввод в поле PASSWORD_REPEAT и отправляет данные в глобальное хранилище при заполнении поля
     * @param {Object} event - объект с данными события формы
     */
    onChangeHandler(event) {
        this.props.dispatch(passwordRepeatOnChange( event.target.value));
    }

    render() {
        return (
            <>
                <label htmlFor="PasswordFormRepeat">ПОВТОРИТЕ ПАРОЛЬ</label>
                <div className="forms__input-cover">
                    <Manager>
                        <Reference>
                            {({ref}) => (
                                <>
                                    <input
                                        ref={ref}
                                        type={this.state.passwordInputType}
                                        id="PasswordFormRepeat"
                                        className="form-control mb-4 forms__input-custom"
                                        name="password_repeat"
                                        value={this.props.value}
                                        onChange={this.onChangeHandler}
                                        onBlur={this.onBlurHandler}
                                        onFocus={this.onFocusHandler}
                                        maxLength="50"
                                        required
                                    />
                                    <div
                                        className='forms__show-password'
                                        onClick={() => this.setState(
                                            {passwordInputType: this.state.passwordInputType === 'password' ? 'text' : 'password'})}>
                                        <img src={this.state.passwordInputType === 'password' ? passwordEyeClose : passwordEyeOpen} alt="откр/закр глаз"/>
                                    </div>
                                </>
                            )}
                        </Reference>
                        {this.props.error && <Popper placement="bottom">
                            {({ref, style, placement, arrowProps}) => (
                                <div className="error-message rounded" ref={ref} style={style} data-placement={placement}>
                                    {this.props.error}
                                    <Arrow ref={arrowProps.ref} data-placement={placement} style={arrowProps.style} />
                                </div>
                            )}
                        </Popper>}
                    </Manager>
                </div>
            </>
        );
    }
}

export default connect()(PasswordRepeatInput);