import React from 'react';
import { graphql } from 'gatsby';
import { Image, Header, Paragraph } from 'flotiq-components-react';
import Layout from '../layouts/layout';
import ProjectBackButton from '../components/project/ProjectBackButton';
import Contact from '../components/Contact';
import ContactImage from '../assets/contact-image.jpg';
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
            <div className="flex flex-wrap md:flex-nowrap justify-center max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-20">
                <Contact
                    heading="Let's work together"
                    namInputLabel="Name"
                    messageInputLabel="Message"
                    buttonLabel="Send"
                    additionalClass={['']}
                />
                <Image url={ContactImage} additionalClasses={['w-auto ml-5 max-h-72 hidden md:block']} />
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
