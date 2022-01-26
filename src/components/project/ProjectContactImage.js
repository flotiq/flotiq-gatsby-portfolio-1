import React from 'react';

const ProjectContactImage = ({ contactImage, title, additionalClass }) => (
    <div>
        {contactImage && (
            <img className={['w-auto', ...additionalClass].join(' ')} src={contactImage} alt={title} />
        )}
    </div>
);

export default ProjectContactImage;
