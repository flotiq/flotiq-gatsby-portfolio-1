import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts/layout';
import ProjectHeaderImage from '../components/project/ProjectHeaderImage';

const PortfolioProjectTemplate = ({ data }) => {
    const { project } = data;
    return (
        <Layout additionalClass={['bg-white']}>
            <div className="flex flex-wrap max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="flex basis-full md:basis-1/2">
                    <ProjectHeaderImage
                        additionalClass={['']}
                        headerImage={project.headerImage[0] && project.headerImage[0].localFile.publicURL}
                        title={project.name}
                    />
                </div>
                <div className="flex basis-1/2" />
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
