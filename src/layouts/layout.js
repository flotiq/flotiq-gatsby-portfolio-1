import React from 'react';
import Header from '../components/Header';

const Layout = ({ children, additionalClass = [] }) => (
    <main className={['font-sora', ...additionalClass].join(' ')}>
        <Header />
        {children}
    </main>
);

export default Layout;
