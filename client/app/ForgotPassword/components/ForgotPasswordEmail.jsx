import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailOnBlur } from '~/ForgotPassword/actions';

class ForgotPasswordEmail extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    /**
     * Метод, обрабатывающий ввод в поле INPUT и отправляющий данные в глобальное хранилище при потере "фокуса" с поля
     */
    handleChange(event) {
        this.props.dispatch(emailOnBlur(event.target.value));
    }

    render() {
        return (
            <>
                <label htmlFor="forgotPasswordFormEmail">
                    ЭЛЕКТРОННАЯ ПОЧТА
                </label>
                <input
                    className="form-control mb-3"
                    type="email"
                    maxLength="50"
                    id="forgotPasswordFormEmail"
                    value={this.props.value}
                    onChange={() => null}
                    onBlur={this.handleChange}
                    required
                />
            </>
        );
    }
}

export default connect()(ForgotPasswordEmail);