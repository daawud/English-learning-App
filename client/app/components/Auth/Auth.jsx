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
            Войти в личный кабинет
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
              <Form.Group controlId="formBasicEmail">
                  <Form.Label>ЭЛЕКТРОННАЯ ПОЧТА / ЛОГИН</Form.Label>
                  <Form.Control type="email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                  <Form.Label>ПАРОЛЬ</Form.Label>
                  <Form.Control type="password" />
              </Form.Group>
              
              <Button variant="primary" type="submit">
                  ВОЙТИ
              </Button>
              <Row className="my-3">
                <Col className="text-center">
                  <Link to="/checkPassword">Восстановить пароль</Link>
                </Col>
              </Row>
              <Row className="my-3">
                <Col className="text-center">
                  <Link to="/register">Нет личного кабинета? Зарегистрируйся</Link>
                </Col>
              </Row>
              
          </Form>
        </Modal.Body>
      </Modal>
    );
}

export default function Auth() {
    const [modalShow, setModalShow] = React.useState(false);
    
    return (
        <ButtonToolbar>
                <Button variant="secondary" onClick={() => setModalShow(true)}>
                    ПРОДОЛЖИТЬ
                </Button>
                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
        </ButtonToolbar>
    )
}