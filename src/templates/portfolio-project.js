import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts/layout';

const PortfolioProjectTemplate = ({ data }) => {
    const { project } = data;

    return (
        <Layout additionalClass={['bg-white']}>
            <div>1</div>
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
