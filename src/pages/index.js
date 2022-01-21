import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../layouts/layout';

const IndexPage = ({ pageContext }) => (
    <Layout additionalClass={['bg-white']}>
        <Helmet>
            <title>Flotiq Gatsby portfolio starter</title>
        </Helmet>
    </Layout>
);

export default IndexPage;
