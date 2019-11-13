import React, { Component } from 'react';
import { connect } from 'react-redux';

import PopUpMessageArrowLeft from '~/components/PopUpMassageArrorLeft/PopUpMessageArrowLeft.jsx';
import { nameOnBlur, clearNameErrorMassage } from '~/Register/actions';

class NameInput extends Component {
    constructor(props) {
        super(props);
        this.onBlurHandler = this.onBlurHandler.bind(this);
        this.onFocusHandler = this.onFocusHandler.bind(this);
    }

    /**
     * обрабатывает ввод в поле NAME и отправляет данные в глобальное хранилище при потере "фокуса" с поля
     * @param {Object} event - объект с данными события формы
     */
    onBlurHandler(event) {
        if (event.target.value !== '') {
            this.props.dispatch(nameOnBlur( event.target.value));
        }
    }

    /**
     * Функция обрабатывает фокус поля NAME и отправляет запрос на очистку ошибки валидации при фокусе на данном поле
     */
    onFocusHandler() {
        this.props.dispatch(clearNameErrorMassage());
    }

    render() {
        return (
            <>
                <label htmlFor="nameForm">ИМЯ</label>
                <div className="reg-form__input-cover">
                    <input
                        type="text"
                        id="nameForm"
                        className="form-control mb-3"
                        name="name"
                        value={this.props.name}
                        onChange={() => null}
                        onBlur={this.onBlurHandler}
                        onFocus={this.onFocusHandler}
                        maxLength="50"
                    />
                    {this.props.error
                    && <PopUpMessageArrowLeft message={this.props.error}/>}
                </div>
            </>
        );
    }
}

export default connect()(NameInput);