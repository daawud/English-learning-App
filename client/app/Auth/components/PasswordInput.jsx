import React, { Component } from 'react';

class PasswordInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            passwordInputType: 'password',
        };
    }

    render() {
        return (
            <>
                <div className="input-cover">
                    <label htmlFor="PasswordForm">ПАРОЛЬ</label>
                    <input
                        type={this.state.passwordInputType}
                        id="PasswordForm"
                        className="form-control mb-4 input-custom"
                        name="password"
                        onChange={() => null}
                        onBlur={this.props.handleChange}
                        maxLength="50"
                        required
                    />
                    <div
                        className='show-password'
                        onClick={() => this.setState(
                            {passwordInputType: this.state.passwordInputType === 'password' ? 'text' : 'password'}
                        )}
                    ><img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Feather-core-eye.svg/1024px-Feather-core-eye.svg.png"
                            className="input-eye"
                            alt=""/>
                    </div>
                </div>
            </>
        );
    }
}

export default PasswordInput;