import './MainPage.scss';

import React from 'react';

import ForgotPassword from '~/ForgotPassword/containers/ForgotPassword.jsx';
import RegisterForm from '~/Register/containers/Register.jsx';
import AuthForm from '~/Auth/containers/Auth.jsx';

export default function MainPage() {
    return (
        <div className="container">
            <div className="row mb-3">
                <h3>Главная страница</h3>
            </div>
            <div className="row mb-3">
                <div className="text-center">
                    <h4>Мотивирующий текст</h4>
                </div>
            </div>
            <div className="row mb-3">
                <div>
                    <RegisterForm />
                </div>
            </div>
            <div className="row mb-3">
                <div>
                    <AuthForm />
                </div>
            </div>
            <div className="row mb-3">
                <div>
                    <ForgotPassword />
                </div>
            </div>
        </div>
    );
}
