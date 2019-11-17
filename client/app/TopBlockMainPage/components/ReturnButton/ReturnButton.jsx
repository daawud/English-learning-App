import './ReturnButton.scss';

import React, { Component } from 'react';
import arrow from '~/assets/img/return_button_arrow.svg';
import rectangle from '~/assets/img/return_button_rectangle.svg';
import { connect } from 'react-redux';

class ReturnButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="d-flex justify-content-center">
                {/* по клику запускает тот экшн, который был прокинут в кнопку ввиде пропса */}
                <button className="return-btn" onClick={() => this.props.dispatch(this.props.action())}>
                    <img className="return-btn__arrow" src={arrow} alt="arrow"/>
                    <img className="return-btn__rectangle" src={rectangle} alt="rectangle"/>
                </button>
            </div>
        );
    }
}

export default connect()(ReturnButton);