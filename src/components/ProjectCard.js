import React from 'react';
import ProjectImage from '../assets/project-image-1.jpg';

const ProjectCard = ({ onClick, name, excerpt }) => (
    <div
        className="basis-full md:basis-2/4 lg:basis-1/4 px-1 cursor-pointer bg-white mb-5"
        onClick={onClick}
    >
        <img className="w-full" src={ProjectImage} alt={name} />
        <h1 className="uppercase my-3 text-xl md:text-2xl">{name}</h1>
        <p className="text-sm md:text-base font-sora font-light">{excerpt}</p>
    </div>
);

export default ProjectCard;
