import './TopBlockMainPage.scss';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import LearningMaterialOptions from '~/LearningMaterialOptions/containers/LearningMaterialOptions.jsx';
import Welcome from '~/TopBlockMainPage/components/WelcomeBlock/WelcomeBlock.jsx';
import TestOptions from '~/TestOptions/containers/TestOptions.jsx';
import { mainBlockToShow } from '~/TopBlockMainPage/actions';

class TopBlockMainPage extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="">
                {this.props.mainTopBlockShow && <Welcome />}
                {this.props.materialOptionsBlockShow && <LearningMaterialOptions />}
                {this.props.testOptionsBlockShow && <TestOptions />}
            </div>
        );
    }

    componentDidMount() {
        // сразу показываем приветственный блок
        this.props.dispatch(mainBlockToShow());
    }
}

function mapStateToProps(state) {
    return state.topPageBlockReducer;
}

export default connect(mapStateToProps)(TopBlockMainPage);
