import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts/layout';
import ProjectBackButton from '../components/project/ProjectBackButton';

const PortfolioProjectTemplate = ({ data }) => {
    const { project } = data;

    return (
        <Layout additionalClass={['bg-white']}>
            <div className="flex flex-wrap max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <ProjectBackButton additionalClass={['my-5']} backButtonText="Back to the main page" />
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
              gallery {
                  localFile {
                      publicURL
                  }
              }
          }
      }
`;

export default PortfolioProjectTemplate;
