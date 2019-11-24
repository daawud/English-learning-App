import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailOnChange } from '~/modules/ForgotPassword/actions';

class ForgotPasswordEmail extends Component {
    constructor(props) {
        super(props);
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    /**
     * Метод, обрабатывающий ввод в поле INPUT и отправляющий данные в глобальное хранилище при потере "фокуса" с поля
     */
    onChangeHandler(event) {
        this.props.dispatch(emailOnChange(event.target.value));
    }

    render() {
        return (
            <>
                <label htmlFor="forgotPasswordFormEmail">
                    ЭЛЕКТРОННАЯ ПОЧТА
                </label>
                <input
                    className="form-control mb-5"
                    type="email"
                    maxLength="50"
                    id="forgotPasswordFormEmail"
                    value={this.props.value}
                    onChange={this.onChangeHandler}
                    required
                />
            </>
        );
    }
}

export default connect()(ForgotPasswordEmail);