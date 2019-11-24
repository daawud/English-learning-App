import './TestOptions.scss';

import React from 'react';

import TestOptionBlock from '~/modules/TestOptions/components/TestOptionBlock/TestOptionBlock.jsx';
import ReturnButton from '~/libs/components/ReturnButton/ReturnButton.jsx';
import { MDBCol, MDBContainer, MDBRow } from 'mdbreact';

const TestOptions = (props) => {
    // структура страницы созданная ввиде объекта для пробрасывания в PROPSы дочерних компонентов
    const blocks = {
        block_1: {
            level1: {name: 'A1', text: 'Beginner and Elementary', path: 'a1'},
            level2: {name: 'A2', text: 'Pre-Intermediate', path: 'a2'}
        },
        block_2: {
            level1: {name: 'B1', text: 'Intermediate', path: 'b1'},
            level2: {name: 'B2', text: 'Upper-Intermediate', path: 'b2'}
        },
        block_3: {
            level1: {name: 'C1', text: 'Advance', path: 'c1'},
            level2: {name: 'C2', text: 'Fluent', path: 'c2'}
        }
    };

    return (
        <>
            <MDBContainer className="test-option p-2">
                <MDBRow className="d-flex justify-content-center">
                    <p className="test-option__heading text-center font-weight-bold m-4">
                        Выберите тест для проверки уровня знаний
                    </p>
                </MDBRow>
                <MDBRow className="d-flex justify-content-center align-items-center">
                    <MDBCol sm={10} md={10} lg={3}><p className="m-0 p-0">Basic User</p></MDBCol>
                    <MDBCol sm={8} md={5} lg={4}><TestOptionBlock {...blocks.block_1.level1}/></MDBCol>
                    <MDBCol sm={8} md={5} lg={4}><TestOptionBlock {...blocks.block_1.level2}/></MDBCol>
                </MDBRow>
                <MDBRow className="d-flex justify-content-center align-items-center">
                    <MDBCol sm={10} md={10} lg={3}><p className="m-0 p-0">Independent User</p></MDBCol>
                    <MDBCol sm={8} md={5} lg={4}><TestOptionBlock {...blocks.block_2.level1}/></MDBCol>
                    <MDBCol sm={8} md={5} lg={4}><TestOptionBlock {...blocks.block_2.level2}/></MDBCol>
                </MDBRow>
                <MDBRow className="d-flex justify-content-center align-items-center">
                    <MDBCol sm={10} md={10} lg={3}><p className="m-0 p-0">Proficient User</p></MDBCol>
                    <MDBCol sm={8} md={5} lg={4}><TestOptionBlock {...blocks.block_3.level1}/></MDBCol>
                    <MDBCol sm={8} md={5} lg={4}><TestOptionBlock {...blocks.block_3.level2}/></MDBCol>
                </MDBRow>
                <MDBRow className="d-flex justify-content-center mt-3">
                    <ReturnButton />
                </MDBRow>
            </MDBContainer>
        </>
    );
};

export default TestOptions;

