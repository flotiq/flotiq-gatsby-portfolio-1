import React from 'react';
// import ProjectImage from '../assets/project-image-1.jpg';

const ProjectCard = ({ onClick, name, excerpt, image }) => (
    <div
        className="basis-full md:basis-2/4 lg:basis-1/4 px-1 cursor-pointer bg-white mb-5"
        onClick={onClick}
    >
        {image && (
            <img className="w-full" src={image} alt={name} />
        )}
        <h1 className="uppercase my-3 text-xl md:text-2xl">{name}</h1>
        <div
            dangerouslySetInnerHTML={{ __html: excerpt }}
            className="text-sm md:text-base font-sora font-light line-clamp-1"
        />
    </div>
);

export default ProjectCard;
