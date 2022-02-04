import React from 'react';
import { graphql } from 'gatsby';
import { Image, Header, Paragraph } from 'flotiq-components-react';
import Layout from '../layouts/layout';
import ProjectBackButton from '../components/project/ProjectBackButton';

const PortfolioProjectTemplate = ({ data }) => {
    const { project } = data;
    return (
        <Layout additionalClass={['bg-white']}>
            <div className="flex flex-wrap max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <ProjectBackButton additionalClass={['my-5']} backButtonText="Back to the main page" />
            </div>
            <div className="flex flex-wrap max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="flex basis-full md:basis-1/2">
                    <Image
                        url={project.headerImage[0] && project.headerImage[0].localFile.publicURL}
                        stretched
                    />
                </div>
                <div className="flex flex-col basis-full md:basis-1/2 pl-0 md:pl-12 py-5">
                    <Header
                        text={project.name}
                        additionalClasses={['uppercase mb-12 !text-3xl md:!text-4xl lg:!text-5xl']}
                    />
                    <Paragraph
                        text={project.description}
                        additionalClasses={['!text-base md:!text-lg font-light font-sora']}
                    />
                </div>
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
        }
    }
`;

export default PortfolioProjectTemplate;
