import React, { Component } from 'react';
import { connect } from 'react-redux';

import PopUpMessageArrowLeft from '~/components/PopUpMassageArrorLeft/PopUpMessageArrowLeft.jsx';
import { emailOnBlur, clearEmailErrorMassage } from '~/Register/actions';

class EmailInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.onFocusHandler = this.onFocusHandler.bind(this);
    }

    /**
     * Обрабатывает ввод в поле EMAIL и отправляет данные в глобальное хранилище при потере "фокуса" с поля
     * @param {Object} event - объект с данными события формы
     */
    handleChange(event) {
        if (!event.target.value) return;

        this.props.dispatch(emailOnBlur( event.target.value));
    }

    /**
     * Функция обрабатывает фокус поля EMAIL и отправляет запрос на очистку ошибки валидации при фокусе на данном поле
     */
    onFocusHandler() {
        this.props.dispatch(clearEmailErrorMassage());
    }

    render() {
        return (
            <>
                <label htmlFor="EmailForm">ЭЛЕКТРОННАЯ ПОЧТА</label>
                <div className="reg-form__input-cover">
                    <input
                        type="email"
                        id="EmailForm"
                        className="form-control mb-3"
                        name="email"
                        maxLength="50"
                        onChange={() => null}
                        onBlur={this.handleChange}
                        onFocus={this.onFocusHandler}
                        required
                    />
                    {this.props.error
                    && <PopUpMessageArrowLeft message={this.props.error}/>}
                </div>
            </>
        );
    }
}

export default connect()(EmailInput);