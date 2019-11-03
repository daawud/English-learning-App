import './MainPage.scss';
import AuthForm from '../../components/Auth/Auth.jsx';
import RegisterForm from '../../components/Register/Register.jsx';

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
        </Container>
        // <Container>
        //     <RegisterForm />
        //     <AuthForm />
        // </Container>
    );
}