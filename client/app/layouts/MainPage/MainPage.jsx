import './MainPage.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import React from 'react';
import AuthForm from '~/components/Auth/Auth.jsx';
import RegisterForm from '~/components/Register/Register.jsx';
import ForgotPassword from '~/ForgotPassword/containers/ForgotPassword.jsx';

export default function MainPage() {
    return (
        <Container>
            <Row className="mb-3">
                <h3>Главная страница</h3>
            </Row>
            <Row className="mb-3">
                <Col className="text-center">
                    <h4>Мотивирующий текст</h4>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col md={{ span: 2, offset: 5 }}><RegisterForm /></Col>
            </Row>
            <Row className="mb-3">
                <Col md={{ span: 2, offset: 5 }}><AuthForm /></Col>
            </Row>
            <Row className="mb-3">
                <Col md={{ span: 2, offset: 5 }}><ForgotPassword /></Col>
            </Row>
        </Container>
    );
}