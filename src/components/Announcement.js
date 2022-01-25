import React from 'react';

const Announcement = ({ additionalClass, message1, message2 }) => (
    <div className={['max-w-4xl flex flex-wrap md:flex-nowrap items-center '
    + 'justify-center md:justify-between mx-auto px-2 sm:px-6 lg:px-8 uppercase', ...additionalClass].join(' ')}
    >
        <h1 className="text-3xl mb-4 mx-1 text-center">{message1}</h1>
        <h1 className="text-3xl mb-4 mx-1 text-center">{message2}</h1>
    </div>
);

export default Announcement;
