import './TopBlockMainPage.scss';

import React from 'react';
import { useParams } from 'react-router-dom';

import LearningMaterialOptions from '~/modules/LearningMaterialOptions/containers/LearningMaterialOptions.jsx';
import Welcome from '~/modules/TopBlockMainPage/components/WelcomeBlock/WelcomeBlock.jsx';
import TestOptions from '~/modules/TestOptions/containers/TestOptions.jsx';
import CourseOptions from '~/modules/CourseOptions/containers/CourseOptions.jsx';

export default function TopBlockMainPage() {
    let { page } = useParams();

    return (
        <>
            <div className="main-page-top-block">
                {!page && <Welcome />}
                {page === 'dashboard' && <LearningMaterialOptions />}
                {page === 'test' && <TestOptions />}
                {page === 'training' && <CourseOptions heading='Выберите вид тренировки'/>}
                {page === 'study' && <CourseOptions heading='Выберите курс обучения'/>}
            </div>
        </>
    )
}