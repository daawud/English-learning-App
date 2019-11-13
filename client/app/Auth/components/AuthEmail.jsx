import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailOnBlur } from '~/Auth/actions';



class AuthEmail extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    /**
     * обрабатывает ввод в поле EMAIL и отправляет данные в глобальное хранилище при потере "фокуса" с поля
     * @param {Object} event - объект с данными события формы
     */
    handleChange(event) {
        this.props.dispatch(emailOnBlur( event.target.value));
    }

    render() {
        return (
            <>
                <label htmlFor="EmailForm">ЭЛЕКТРОННАЯ ПОЧТА</label>
                <input
                    type="email"
                    id="EmailForm"
                    className="form-control mb-3"
                    value={this.props.value}
                    name="email"
                    maxLength="50"
                    onChange={() => null}
                    onBlur={this.handleChange}
                    required
                />
            </>
        );
    }
}

export default connect()(AuthEmail);