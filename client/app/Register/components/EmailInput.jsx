import React, { Component } from 'react';
import { connect } from 'react-redux';

import PopUpMessageArrowLeft from '~/components/PopUpMassageArrorLeft/PopUpMessageArrowLeft.jsx';
import { emailOnChange, emailOnBlur, clearEmailErrorMassage } from '~/Register/actions';

class EmailInput extends Component {
    constructor(props) {
        super(props);
        this.onBlurHandler = this.onBlurHandler.bind(this);
        this.onFocusHandler = this.onFocusHandler.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    /**
     * Обрабатывает ввод в поле EMAIL и отправляет данные в глобальное хранилище при потере "фокуса" с поля
     * @param {Object} event - объект с данными события формы
     */
    onBlurHandler(event) {
        if (event.target.value !== '') {
            this.props.dispatch(emailOnBlur( event.target.value));
        }
    }

    /**
     * Функция обрабатывает фокус поля EMAIL и отправляет запрос на очистку ошибки валидации при фокусе на данном поле
     */
    onFocusHandler() {
        this.props.dispatch(clearEmailErrorMassage());
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
                <div className="reg-form__input-cover">
                    <input
                        type="email"
                        id="EmailForm"
                        className="form-control mb-3"
                        name="email"
                        value={this.props.value}
                        maxLength="50"
                        onChange={this.onChangeHandler}
                        onBlur={this.onBlurHandler}
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