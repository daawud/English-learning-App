import React from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className="text-center">
            Зарегистрироваться
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
              <Form.Group controlId="formBasicName">
                  <Form.Label>ИМЯ</Form.Label>
                  <Form.Control type="text" />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                  <Form.Label>ЭЛЕКТРОННАЯ ПОЧТА / ЛОГИН</Form.Label>
                  <Form.Control type="email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                  <Form.Label>ПАРОЛЬ</Form.Label>
                  <Form.Control type="password" />
              </Form.Group>
              
              <Button variant="primary" type="submit">
                  СОЗДАТЬ
              </Button>
              <Row className="my-3">
                <Col className="text-center">
                  <Link to="/auth">Есть аккуант? Войти</Link>
                </Col>
              </Row>
          </Form>
        </Modal.Body>
      </Modal>
    );
}

export default function Register() {
    const [modalShow, setModalShow] = React.useState(false);
    
    return (
        <ButtonToolbar>
                <Button variant="secondary" onClick={() => setModalShow(true)}>
                    НАЧАТЬ
                </Button>
                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
        </ButtonToolbar>
    )
}