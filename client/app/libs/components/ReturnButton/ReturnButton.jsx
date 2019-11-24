import './ReturnButton.scss';

import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

import arrow from '~/assets/img/return_button_arrow.svg';
import rectangle from '~/assets/img/return_button_rectangle.svg';

class ReturnButton extends Component {
    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this);
    }

    /**
     * Функция, позволяющая отправить пользователя на страницу с которой он пришел.
     * Работает в любом месте независимо
     */
    goBack(){
        this.props.history.goBack();
    }

    render() {
        return (
            <div className="d-flex justify-content-center">
                <button className="return-btn" onClick={() => this.goBack()}>
                    <img className="return-btn__arrow" src={arrow} alt="arrow"/>
                    <img className="return-btn__rectangle" src={rectangle} alt="rectangle"/>
                </button>
            </div>
        );
    }
}

export default withRouter(ReturnButton);