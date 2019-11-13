import React, { Component } from 'react';
import './PopUpMessageArrowLeft.scss';

class PopUpMessageArrowLeft extends Component {
    render() {
        return (
            <div className="popup-message d-flex align-items-center text-left px-2">
                <small>{this.props.message}</small>
            </div>
        );
    }
}

export default PopUpMessageArrowLeft;