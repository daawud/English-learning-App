import './ForgotPassword.scss';
import { MDBModal, MDBModalBody, MDBCloseIcon, MDBBtn } from 'mdbreact';

import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { forgotPasswordModalToOpen, forgotPasswordModalToClose, emailOnBlur } from '~/ForgotPassword/actions';
import  ForgotPasswordEmail  from '~/ForgotPassword/components/ForgotPasswordEmail.jsx';

class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /**
     * Метод, обрабатывающий нажатие на кнопку ОТПРАВИТЬ
     */
    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <>
                <MDBModal isOpen={this.props.forgotPasswordModalOpened}
                          toggle={() => this.props.dispatch(forgotPasswordModalToClose())}>
                    {!this.props.forgotPasswordModalOpened && <Redirect to="/"/>}
                    <MDBModalBody>
                        <p className="text-center">Забыли пароль?
                            <MDBCloseIcon
                                onClick={() => this.props.dispatch(forgotPasswordModalToClose())}>
                            </MDBCloseIcon>
                        </p>
                        <form onSubmit={this.handleSubmit} className="text-center p-5">
                            <p className="h6 text-center mb-4">
                                Мы отправим на Вашу электронную почту новый пароль
                            </p>
                            <ForgotPasswordEmail value={this.props.value}/>
                            <MDBBtn className="btn btn-info btn-block my-4" type="submit">
                                Отправить
                            </MDBBtn>
                        </form>
                        <p className="text-center"> Нет личного кабинета?
                            <Link to="/register"> Зарегистрируйся </Link>
                        </p>
                    </MDBModalBody>
                </MDBModal>
            </>
        );
    }

    componentDidMount() {
        this.props.dispatch(forgotPasswordModalToOpen());
    }

    componentWillUnmount() {
        this.props.dispatch(forgotPasswordModalToClose());
    }
}

function mapStateToProps(state) {
    return state.forgotPasswordReducer;
}

export default connect(mapStateToProps)(ForgotPassword);
