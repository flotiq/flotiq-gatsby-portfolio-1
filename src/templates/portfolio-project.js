import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts/layout';
import ProjectDescription from '../components/portfolio/ProjectDescription';

const PortfolioProjectTemplate = ({ data }) => {
    const { project } = data;

    return (
        <Layout additionalClass={['bg-white']}>
            <div className="flex flex-wrap max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="flex basis-full md:basis-1/2" />
                <div className="flex basis-full md:basis-1/2 pl-0 md:pl-12 py-5">
                    <ProjectDescription description={project.description} additionalClass={['text-base md:text-lg']} />
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
              gallery {
                  localFile {
                      publicURL
                  }
              }
          }
      }
`;

export default PortfolioProjectTemplate;
