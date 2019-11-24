import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Manager, Reference, Popper } from 'react-popper';

import {Arrow} from '~/modules/Register/Arrows/Arrows';
import { nameOnChange, nameOnBlur, clearNameErrorMassage } from '~/modules/Register/actions';

class NameInput extends Component {
    constructor(props) {
        super(props);
        this.onBlurHandler = this.onBlurHandler.bind(this);
        this.onFocusHandler = this.onFocusHandler.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
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

    /**
     * обрабатывает ввод в поле NAME и отправляет данные в глобальное хранилище при заполнении поля
     * @param {Object} event - объект с данными события формы
     */
    onChangeHandler(event) {
        this.props.dispatch(nameOnChange( event.target.value));
    }

    render() {
        return (
            <>
                <label htmlFor="nameForm">ИМЯ</label>
                <div className="forms__input-cover">

                    <Manager>
                        <Reference>
                            {({ref}) => (
                                <input
                                    ref={ref}
                                    type="text"
                                    id="nameForm"
                                    className="form-control mb-4 forms__input-custom"
                                    name="name"
                                    value={this.props.value}
                                    onChange={this.onChangeHandler}
                                    onBlur={this.onBlurHandler}
                                    onFocus={this.onFocusHandler}
                                    maxLength="50"
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

export default connect()(NameInput);