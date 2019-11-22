import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailOnChange } from '~/Auth/actions';



class AuthEmail extends Component {
    constructor(props) {
        super(props);
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    /**
     * обрабатывает ввод в поле EMAIL и отправляет данные в глобальное хранилище при заполнении поля
     * @param {Object} event - объект с данными события формы
     */
    onChangeHandler(event) {
        this.props.dispatch(emailOnChange( event.target.value));
    }

    render() {
        return (
            <>
                <label htmlFor="EmailForm">ЭЛЕКТРОННАЯ ПОЧТА</label>
                <input
                    type="email"
                    id="EmailForm"
                    className="form-control mb-5"
                    value={this.props.value}
                    name="email"
                    maxLength="50"
                    onChange={this.onChangeHandler}
                    required
                />
            </>
        );
    }
}

export default connect()(AuthEmail);