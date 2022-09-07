import React from 'react';
import ProjectCard from '../components/ProjectCard';
import Contact from '../components/Contact';

const ProjectCards = ({ projects }) => (
    <div className="flex flex-wrap justify-between max-w-7xl mt-6 mb-6 mx-auto px-4 py-4 sm:px-6 lg:px-8">
        {projects.map((project) => (
            <ProjectCard
                key={project.id}
                slug={project.slug}
                image={project.headerImage?.[0] && project.headerImage[0].localFile.publicURL}
                name={project.name}
                excerpt={project.description}
            />
        ))}
        <Contact
            imageAlt="Let's work together"
            heading="Let's work together"
            namInputLabel="Name"
            messageInputLabel="Message"
            buttonLabel="Send"
            additionalClass={['px-5']}
        />
    </div>
);

export default ProjectCards;
