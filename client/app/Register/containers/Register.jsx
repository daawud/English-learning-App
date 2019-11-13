import './Register.scss';
import { MDBModal, MDBModalBody, MDBCloseIcon } from 'mdbreact';

import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { registerFormOpen, registerFormClose } from '~/Register/actions';
import EmailInput from '~/Register/components/EmailInput.jsx';
import PasswordInput from '~/Register/components/PasswordInput.jsx';
import NameInput from '~/Register/components/NameInput.jsx';
import PasswordRepeatInput from '~/Register/components/PasswordRepeatInput.jsx';


class Register extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /**
     * Функция обрабатывает нажатие по кнопке СОЗДАТЬ
     * @param {Object} event - объект с данными события формы
     */
    handleSubmit(event) {
        event.preventDefault();
        // Далее подключаем логику с БД
    }

    render() {
        return (
            <>
                <MDBModal
                    isOpen={this.props.registerModalOpened}
                    toggle={() => this.props.dispatch(registerFormClose())}
                    className="reg-modal"
                >
                    {!this.props.registerModalOpened && <Redirect to="/"/>}
                    <MDBModalBody className="reg-modal__body">
                        <form onSubmit={this.handleSubmit} className="text-center px-5 position-relative reg-form">
                            <h5 className="mt-2 mb-5">Зарегистрироваться</h5>
                            <MDBCloseIcon className="reg-form__close" onClick={() => this.props.dispatch(registerFormClose())} />
                            <NameInput vavue={this.props.name} error={this.props.nameValidationError} />
                            <EmailInput vavue={this.props.email} error={this.props.emailValidationError} />
                            <PasswordInput vavue={this.props.password} error={this.props.passwordValidationError} />
                            <PasswordRepeatInput vavue={this.props.passwordRepeat} error={this.props.passwordRepeatValidationError} />
                            <button
                                className="col-md-6 offset-md-3 btn btn-dark btn-block my-4 border-white rounded-pill"
                                type="submit"> СОЗДАТЬ </button>
                            <div>
                                Есть аккуант? <Link className="reg-form__link" to="/auth"> Войти </Link>
                            </div>
                        </form>
                    </MDBModalBody>
                </MDBModal>
            </>
        );
    }
    componentDidMount() {
        this.props.dispatch(registerFormOpen());
    }
    componentWillUnmount() {
        this.props.dispatch(registerFormClose())
    }
}

function mapStateToProps(state) {
    return state.registerFormReducer;
}

export default connect(mapStateToProps)(Register);