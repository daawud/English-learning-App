import './ProgressBar.scss';

import React from 'react';
import { MDBCol, MDBRow } from 'mdbreact';

const ProgressBar = (props) => {
    const pills = props.tasks.map((task, key) => {
        return (
            <MDBCol key={key} className={`progress-scale__pill rounded-pill progress-scale__pill-${task.status}`}/>
        )
    });

    return (
        <>
            <MDBCol md={2} sm={0}/>
            <MDBCol className="progress-scale" sm={12} md={8}>
                <MDBRow className="progress-scale__container">
                    {pills}
                </MDBRow>
            </MDBCol>
        </>
    );
};

export default ProgressBar;