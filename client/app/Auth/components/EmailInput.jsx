import React, { Component } from 'react';
import { connect } from 'react-redux';

class EmailInput extends Component {
    render() {
        return (
            <>
                <label htmlFor="EmailForm">ЭЛЕКТРОННАЯ ПОЧТА / ЛОГИН</label>
                <input
                    type="email"
                    id="EmailForm"
                    className={this.props.emailValidationError ? 'form-control mb-2 is-invalid' : 'form-control mb-3'}
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

function mapStateToProps(state) {
    return state.authFormReducer;
}

export default connect(mapStateToProps)(EmailInput);