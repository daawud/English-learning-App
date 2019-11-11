import React, { Component } from 'react';

class EmailInput extends Component {
    render() {
        return (
            <>
                <label htmlFor="EmailForm">ЭЛЕКТРОННАЯ ПОЧТА / ЛОГИН</label>
                <input
                    type="email"
                    id="EmailForm"
                    className="form-control mb-3"
                    name="email"
                    maxLength="50"
                    onChange={() => null}
                    onBlur={this.props.handleChange}
                    required
                />
            </>
        );
    }
}

export default EmailInput;