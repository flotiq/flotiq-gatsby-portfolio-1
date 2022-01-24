import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const ProjectHeaderImage = ({ headerImage, title }) => (
    <div>
        {headerImage && (
            <GatsbyImage
                alt={title}
                image={getImage(headerImage[0].localFile)}
                className="w-full"
            />
        )}
    </div>
);

export default ProjectHeaderImage;
