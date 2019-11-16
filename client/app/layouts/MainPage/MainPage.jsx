import './MainPage.scss';
import { MDBBtn } from 'mdbreact';

import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Header from '~/Header/containers/Header.jsx';
import LearningMaterialOptions from '~/LearningMaterialOptions/containers/LearningMaterialOptions.jsx';

export default function MainPage() {
    return (
        <div className="container">
            <Header />
            <MDBBtn>
                <Link to="/choose_material"> Начать Обучение </Link>
            </MDBBtn>
            <Switch>
                <Route path="/choose_material" component={LearningMaterialOptions}/>
            </Switch>
        </div>
    );
}