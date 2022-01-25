import React from 'react';

const ProjectHeaderImage = ({ headerImage, name, additionalClass }) => (
    <>
        {headerImage && (
            <img className={['w-full', ...additionalClass].join(' ')} src={headerImage} alt={name} />
        )}
    </>
);

export default ProjectHeaderImage;
