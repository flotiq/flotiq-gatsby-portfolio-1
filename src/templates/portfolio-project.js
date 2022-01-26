import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts/layout';
import ProjectDescription from '../components/project/ProjectDescription';
import ProjectName from '../components/project/ProjectName';
import ProjectHeaderImage from '../components/project/ProjectHeaderImage';
import ProjectBackButton from '../components/project/ProjectBackButton';
import ProjectGallery from '../components/project/ProjectGallery';

const PortfolioProjectTemplate = ({ data }) => {
    const { project } = data;
    return (
        <Layout additionalClass={['bg-white']}>
            <div className="flex flex-wrap max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <ProjectBackButton additionalClass={['my-5']} backButtonText="Back to the main page" />
            </div>
            <div className="flex flex-wrap max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 pb-10">
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
            <ProjectGallery
                galleryName={project.gallery_name}
                galleryDescription={project.gallery_description}
                additionalClass={['text-base md:']}
                gallery={project.gallery}
                name={project.name}
            />
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
            gallery_name
            gallery_description
            gallery {
                localFile {
                  publicURL
                }
            }
        }
    }
`;

export default PortfolioProjectTemplate;
