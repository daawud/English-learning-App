import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Manager, Reference, Popper } from 'react-popper';

import {Arrow} from '~/Register/Arrows/Arrows';
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
            this.props.dispatch(emailOnBlur(event.target.value));
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
        this.props.dispatch(emailOnChange(event.target.value));
    }

    render() {
        return (
            <>
                <label htmlFor="EmailForm">ЭЛЕКТРОННАЯ ПОЧТА</label>
                <div className="forms__input-cover">
                    <Manager>
                        <Reference>
                            {({ref}) => (
                                <input
                                    ref={ref}
                                    type="email"
                                    id="EmailForm"
                                    className="form-control mb-4 forms__input-custom"
                                    name="email"
                                    value={this.props.value}
                                    maxLength="50"
                                    onChange={this.onChangeHandler}
                                    onBlur={this.onBlurHandler}
                                    onFocus={this.onFocusHandler}
                                    required
                                />
                            )}
                        </Reference>
                        {this.props.error && <Popper placement="auto">
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

export default connect()(EmailInput);