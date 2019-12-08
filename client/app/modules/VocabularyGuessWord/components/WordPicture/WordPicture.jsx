import React from 'react';

const WordPicture = (props) => {
    const defaultImgSrc = 'https://placehold.it/300x200';
    const currentImgDomain = 'http://ela-data-service.abirula.com/api/v1/Pictures/Vocabulary';
    const {currentTask} = props;

    return (
        <img src={currentTask.imgUrl ? `${currentImgDomain}/${currentTask.imgUrl.trim()}`: defaultImgSrc}
            className="rounded-lg shadow border border-default tasks__img"
            alt={currentTask.givenWordEng}
        />
    );
};

export default WordPicture;