import './TopBlockMainPage.scss';

import React from 'react';
import { Route } from 'react-router-dom';

import LearningMaterialOptions from '~/modules/LearningMaterialOptions/containers/LearningMaterialOptions.jsx';
import Welcome from '~/modules/TopBlockMainPage/components/WelcomeBlock/WelcomeBlock.jsx';
import TestOptions from '~/modules/TestOptions/containers/TestOptions.jsx';
import CourseOptions from '~/modules/CourseOptions/containers/CourseOptions.jsx';

const TopBlockMainPage = (props) => {

    return (
        <div className="main-page-top-block">
            <Route path='/home/dashboard' render={() => (<LearningMaterialOptions/>)}/>
            <Route path='/home/test' render={() => (<TestOptions/>)}/>
            <Route path='/home/training' render={() => (<CourseOptions heading='Выберите вид тренировки'/>)}/>
            <Route path='/home/study' render={() => (<CourseOptions heading='Выберите курс обучения'/>)}/>
            <Route exact path='/home' render={() => (<Welcome/>)}/>
        </div>
    )
};

export default TopBlockMainPage;
