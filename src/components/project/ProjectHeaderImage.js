import React from 'react';

const ProjectHeaderImage = ({ headerImage, title, additionalClass }) => (
    <>
        {headerImage && (
            <img className={['w-full', ...additionalClass].join(' ')} src={headerImage} alt={title} />
        )}
    </>
);

export default ProjectHeaderImage;
