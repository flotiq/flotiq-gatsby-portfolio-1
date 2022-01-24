import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../layouts/layout';
import Announcement from '../components/Announcement';

const IndexPage = ({ data, pageContext }) => {
    const projects = data.allProject.nodes;
    return (
        <Layout additionalClass={['bg-white']}>
            <Helmet>
                <title>Flotiq Gatsby portfolio starter</title>
            </Helmet>
            <Announcement additionalClass={['my-4']} message1="Hi! I am Joe Jonas" message2="welcome to my portfolio" />
            {projects.map((project) => (
                <a href={`/${project.slug}`} key={project.id}>{project.name}</a>
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
