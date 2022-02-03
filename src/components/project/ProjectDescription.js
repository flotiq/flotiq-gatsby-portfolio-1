import React from 'react';

const ProjectDescription = ({ description, additionalClass }) => (
    <p
        dangerouslySetInnerHTML={{ __html: description }}
        className={['font-light font-sora', ...additionalClass].join(' ')}
    />
);

export default ProjectDescription;
