import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Announcement, Pagination } from 'flotiq-components-react';
import Layout from '../layouts/layout';
import ProjectCards from '../sections/ProjectCards';

const IndexPage = ({ data, pageContext }) => {
    const projects = data.allProject.nodes;
    return (
        <Layout additionalClass={['bg-light-gray md:bg-white']}>
            <Helmet>
                <title>Flotiq Gatsby portfolio starter</title>
            </Helmet>
            <Announcement
                variant="transparent"
                content={(
                    <h1 className="max-w-4xl flex flex-wrap md:flex-nowrap items-center
                     justify-center md:justify-between mx-auto px-2 sm:px-6 lg:px-8 uppercase"
                    >
                        <span className="text-3xl mb-4 mx-1 text-center">Hi! I am Joe Jonas</span>
                        <span className="text-3xl mb-4 mx-1 text-center">welcome to my portfolio</span>
                    </h1>
                )}
            />
            <ProjectCards projects={projects} />
            <Pagination page={pageContext.currentPage} numOfPages={pageContext.numPages} rounded="none" />
        </Layout>
    );
};

export const pageQuery = graphql`
    query indexQuery($skip: Int!, $limit: Int!) {
        site {
            siteMetadata {
                title
            }
        }
        allProject(sort: {fields: flotiqInternal___createdAt, order: DESC}, limit: $limit, skip: $skip,) {
            nodes {
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
    }
`;

export default IndexPage;
