import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts/layout';
import ProjectDescription from '../components/portfolio/ProjectDescription';
import ProjectName from '../components/project/ProjectName';
import ProjectHeaderImage from '../components/project/ProjectHeaderImage';
import ProjectBackButton from '../components/project/ProjectBackButton';
import Contact from '../components/Contact';
import ProjectContactImage from '../components/project/ProjectContactImage';

const PortfolioProjectTemplate = ({ data }) => {
    const { project } = data;
    return (
        <Layout additionalClass={['bg-white']}>
            <div className="flex flex-wrap max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <ProjectBackButton additionalClass={['my-5']} backButtonText="Back to the main page" />
            </div>
            <div className="flex flex-wrap max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="flex basis-full md:basis-1/2">
                    <ProjectHeaderImage
                        additionalClass={['']}
                        headerImage={project.headerImage[0] && project.headerImage[0].localFile.publicURL}
                        title={project.name}
                    />
                </div>
                <div className="flex flex-col basis-full md:basis-1/2 pl-0 md:pl-12 py-5">
                    <ProjectName name={project.name} additionalClass={['mb-12 text-3xl md:text-4xl lg:text-5xl']} />
                    <ProjectDescription description={project.description} additionalClass={['text-base md:text-lg']} />
                </div>
            </div>
            <div className="flex flex-wrap md:flex-nowrap justify-center max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-20">
                <Contact
                    heading="Let's work together"
                    namInputLabel="Name"
                    messageInputLabel="Message"
                    buttonLabel="Send"
                    additionalClass={['']}
                />
                <ProjectContactImage
                    additionalClass={['ml-5 max-h-72 hidden md:block']}
                    contactImage={project.contactImage[0] && project.contactImage[0].localFile.publicURL}
                    title={project.name}
                />
            </div>
        </Layout>
    );
};

export const pageQuery = graphql`
    query PortfolioProjectBySlug($slug: String!) {
        site {
            siteMetadata {
                title
            }
        }
        project( slug: { eq: $slug } ) {
            id
            description
            slug
            name
            headerImage {
                extension
                url
                width
                height
                localFile {
                    publicURL
                    childImageSharp {
                        gatsbyImageData(layout: FULL_WIDTH)
                    }
                }
            }
            gallery {
                localFile {
                  publicURL
                }
            }
            contactImage {
                extension
                url
                width
                height
                localFile {
                    publicURL
                    childImageSharp {
                        gatsbyImageData(layout: FULL_WIDTH)
                    }
                }
            }
        }
    }
`;

export default PortfolioProjectTemplate;
