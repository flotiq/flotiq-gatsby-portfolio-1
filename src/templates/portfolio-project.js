import React from 'react';
import { graphql } from 'gatsby';
import { Header, Paragraph } from 'flotiq-components-react';
import { Helmet } from 'react-helmet';
import Layout from '../layouts/layout';
import ProjectBackButton from '../components/project/ProjectBackButton';
import Contact from '../components/Contact';
import ProjectGallery from '../components/project/ProjectGallery';
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";

const PortfolioProjectTemplate = ({ data }) => {
    const { project } = data;
    return (
        <Layout additionalClass={['bg-white']}>
            <Helmet>
                <title>{project.name}</title>
                <meta
                    name="description"
                    content={project.description}
                />
            </Helmet>
            <div className="flex flex-wrap max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <ProjectBackButton additionalClass={['my-5']} backButtonText="Back to the main page" />
            </div>
            <div className="flex flex-wrap max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 pb-10">
                <div className="basis-full md:basis-1/2">
                    {project.headerImage[0] &&
                        <GatsbyImage
                            image={getImage(project.headerImage[0] && project.headerImage[0].localFile)}
                            stretched='true'
                            alt={project.name}
                        />}
                </div>

                <div className="flex flex-col basis-full md:basis-1/2 pl-0 md:pl-12 py-5">
                    <Header
                        additionalClasses={['uppercase mb-12 !text-3xl md:!text-4xl lg:!text-5xl']}
                    >
                        {project.name}
                    </Header>
                    <Paragraph
                        additionalClasses={['!text-base md:!text-lg font-light font-sora']}
                    >
                        {project.description}
                    </Paragraph>
                </div>
            </div>
            <ProjectGallery
                galleryName={project.gallery_name}
                galleryDescription={project.gallery_description}
                additionalClass={['text-base md:']}
                gallery={project.gallery}
                name={project.name}
            />
            <div className="flex flex-wrap md:flex-nowrap justify-center max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-20">
                <Contact
                    heading="Let's work together"
                    namInputLabel="Name"
                    messageInputLabel="Message"
                    buttonLabel="Send"
                    imageAlt={project.name}
                    additionalClass={['']}
                />
                <StaticImage src={'../assets/contact-image.jpg'} width={499} height={288} alt='' className={['w-auto ml-5 max-h-72 hidden md:block']} placeholder="none" />
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
                        gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
                    }
                }
            }
            gallery_name
            gallery_description
            gallery {
                extension
                url
                width
                height
                id
                localFile {
                  publicURL
                  childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
                }
                }
            }
        }
    }
`;

export default PortfolioProjectTemplate;
