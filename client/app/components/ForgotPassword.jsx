import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol md="6">
                    <form>
                        <div className="text-center mt-4">
                            <Link to="/">Иконка крестик</Link>
                        </div>
                        <p className="h4 text-center mb-4">Забыли пароль?</p>
                        <p className="h6 text-center mb-4"> Мы отправим вам инструкции по переустановке пароля по
                            email.
                        </p>
                        <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                            Электронная почта
                        </label>
                        <input
                            type="email"
                            id="defaultFormLoginEmailEx"
                            className="form-control"
                        />
                        <br/>
                        <div className="text-center mt-4">
                            <MDBBtn type="submit">Отправить</MDBBtn>
                        </div>
                        <div className="text-center mt-4">
                        <Link to="/sign_in">Нет личного кабинета? Зарегистрируйся</Link>
                        </div>
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default ForgotPassword;