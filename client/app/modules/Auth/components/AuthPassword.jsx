import React, { Component } from 'react';
import { connect } from 'react-redux';

import { passwordOnChange } from '~/modules/Auth/actions';
import passwordEyeOpen from '~/assets/img/passwordEyeOpen.svg';
import passwordEyeClose from '~/assets/img/passwordEyeClose.svg';

class AuthPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            passwordInputType: 'password',
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }


    /**
     * обрабатывает ввод в поле PASSWORD и отправляет данные в глобальное хранилище при заполнении поля
     * @param {Object} event - объект с данными события формы
     */
    onChangeHandler(event) {
        this.props.dispatch(passwordOnChange( event.target.value));
    }

    render() {
        return (
            <>
                <label htmlFor="PasswordForm">ПАРОЛЬ</label>
                <div className="forms__input-cover">
                    <input
                        type={this.state.passwordInputType}
                        id="PasswordForm"
                        className="forms__input-custom form-control mb-5"
                        name="password"
                        value={this.props.value}
                        onChange={this.onChangeHandler}
                        maxLength="50"
                        required
                    />
                    <div
                        className='forms__show-password'
                        onClick={() => this.setState(
                            {passwordInputType: this.state.passwordInputType === 'password' ? 'text' : 'password'})}>
                        <img
                            src={this.state.passwordInputType === 'password' ? passwordEyeClose : passwordEyeOpen}
                            alt="откр/закр глаз"/>
                    </div>
                </div>
            </>
        );
    }
}

export default connect()(AuthPassword);