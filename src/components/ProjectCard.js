import React from 'react';
import { Card } from 'flotiq-components-react';

const ProjectCard = ({ onClick, name, excerpt, image }) => (
    <Card
        onClick={onClick}
        bordered={false}
        additionalClasses={['basis-full md:basis-2/4 lg:basis-1/4 px-1 cursor-pointer bg-white mb-5']}
    >
        <Card.Img src={image} alt={name} additionalContainerClasses={['order-1 lg:order-2']} />
        <Card.Body additionalClasses={['px-0 md:px-0']}>
            <div>
                <Card.Title additionalClasses={['uppercase my-3 text-xl md:text-2xl']}>
                    {name}
                </Card.Title>
                <Card.Text additionalClasses={['text-sm md:text-base font-sora font-light line-clamp-1']}>
                    <div dangerouslySetInnerHTML={{ __html: excerpt }} />
                </Card.Text>
            </div>
        </Card.Body>
    </Card>
);

export default ProjectCard;
