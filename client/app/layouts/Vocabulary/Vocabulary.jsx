import './Vocabulary.scss';

import VocabularyGuessWord from '~/modules/VocabularyGuessWord/containers/VocabularyGuessWord.jsx';

import React from 'react';
import { withRouter } from 'react-router-dom';


function Vocabulary() {
    return (
        <>
            < VocabularyGuessWord />
        </>
    );
}
export default withRouter(Vocabulary);