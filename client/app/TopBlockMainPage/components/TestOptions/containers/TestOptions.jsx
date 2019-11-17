import './TestOptions.scss';

import React from 'react';

import TestOptionBlock from '~/TopBlockMainPage/components/TestOptions/components/TestOptionBlock/TestOptionBlock.jsx';
import ReturnButton from '~/TopBlockMainPage/components/ReturnButton/ReturnButton.jsx';
import { materialOptionsBlockToShow } from '~/TopBlockMainPage/actions';

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
            <div className="test-option py-2">
                <p className="test-option__heading text-center font-weight-bold mb-2">
                    Выберите тест для проверки уровня знаний
                </p>
                <div className="test-option__block d-flex align-items-center">
                    <div className="test-option__user"><p className="m-0 p-0">Basic User</p></div>
                    <TestOptionBlock {...blocks.block_1.level1}/>
                    <TestOptionBlock {...blocks.block_1.level2}/>
                </div>
                <div className="test-option__block d-flex align-items-center">
                    <div className="test-option__user"><p className="m-0 p-0">Independent User</p></div>
                    <TestOptionBlock {...blocks.block_2.level1}/>
                    <TestOptionBlock {...blocks.block_2.level2}/>
                </div>
                <div className="test-option__block d-flex align-items-center">
                    <div className="test-option__user"><p className="m-0 p-0">Proficient User</p></div>
                    <TestOptionBlock {...blocks.block_3.level1}/>
                    <TestOptionBlock {...blocks.block_3.level2}/>
                </div>
                {/* пробрасываем в кнопку экшн на открытие Модуля выбора материала для изучения  */}
                <ReturnButton action={materialOptionsBlockToShow}/>
            </div>
        </>
    );
};

export default TestOptions;

