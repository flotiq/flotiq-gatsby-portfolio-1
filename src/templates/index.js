import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../layouts/layout';

const IndexPage = ({ data, pageContext }) => {
    const projects = data.allProject.nodes;
    return (
        <Layout additionalClass={['bg-light-gray md:bg-white']}>
            <Helmet>
                <title>Flotiq Gatsby portfolio starter</title>
            </Helmet>
            {projects.map((project) => (
                <a className="flex" href={`/${project.slug}`} key={project.id}>{project.name}</a>
            ))}
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
