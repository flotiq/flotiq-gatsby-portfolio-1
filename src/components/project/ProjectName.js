import React from 'react';

const ProjectName = ({ name, additionalClass }) => (
    <h1 className={['uppercase', ...additionalClass].join(' ')}>{name}</h1>
);

export default ProjectName;
