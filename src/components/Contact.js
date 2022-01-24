import React from 'react';
import Logo from '../assets/Logo.svg';

const navigation = {
    social: [
        {
            name: 'Facebook',
            href: '#',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 13 25" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M8.30466 24.1211V13.5346H11.8761L12.407 9.38964H8.30466V6.74947C8.30466
                    5.55339 8.63791 4.73447 10.3545 4.73447H12.5297V1.03902C11.4714 0.925596
                    10.4076 0.870832 9.34316 0.874974C6.18633 0.874974 4.01891 2.80214 4.01891
                    6.34002V9.38189H0.470703V13.5268H4.02666V24.1211H8.30466Z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'LinkedIn',
            href: '#',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 32 32" {...props}>
                    <rect y="9" width="7" height="23" />
                    <path
                        fillRule="evenodd"
                        d="M24,9c-4,0-5.11,1.31-6,3V9H11V32h7V19c0-2,0-4,3.5-4S25,17,25,19V32h7V19C32,13,31,9,24,9Z"
                        clipRule="evenodd"
                    />
                    <circle cx="3.5" cy="3.5" r="3.5" />
                </svg>
            ),
        },
        {
            name: 'Link',
            href: '#',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 26.68 11.63" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M15.06,0a5.79,5.79,0,0,0-4.75,2.46A5.62,5.62,0,0,0,9.3,5a5.8,5.8,0,0,0,.27,2.74H11.7a3.89,
                        3.89,0,0,1-.52-1.94,3.83,3.83,0,0,1,.52-1.93,3.88,3.88,0,0,1,3.36-1.94h5.81a3.88,3.88,0,0,1,0,
                        7.75h-3a8,8,0,0,1-1.58,1.94h4.56a5.83,5.83,0,0,0,2.22-.45A5.75,5.75,0,0,0,25,9.92,5.81,5.81,0,0,
                        0,26.24,8a5.85,5.85,0,0,0,0-4.45A5.79,5.79,0,0,0,23.09.44,5.82,5.82,0,0,0,20.87,0Z"
                        clipRule="evenodd"
                    />
                    <path
                        fillRule="evenodd"
                        d="M10.37,0H5.81a5.82,5.82,0,0,0,0,11.63h5.81A5.92,5.92,0,0,0,14.3,11a5.87,5.87,0,0,0,3.09-4.37,
                        5.88,5.88,0,0,0-.28-2.73H15.5a1.51,1.51,0,0,0-.48.06,3.91,3.91,0,0,1,.48,1.92A3.81,3.81,0,0,1,
                        15,7.78a3.85,3.85,0,0,1-3.34,1.91H5.81a3.88,3.88,0,1,1,0-7.75h3A7.64,7.64,0,0,1,10.38,0Z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
    ],
};

const Contact = ({ heading, namInputLabel, messageInputLabel, buttonLabel }) => (
    <div className="w-full lg:w-2/4 xl:w-1/4 py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
        <div className="w-full mx-auto">
            <h2 className="uppercase text-xl md:text-2xl mb-4 tracking-wide">{heading}</h2>
            <form action="#" method="POST" className="font-sora font-light flex flex-col space-y-4">
                <div>
                    <label htmlFor="full-name" className="sr-only">
                        {namInputLabel}
                    </label>
                    <input
                        type="text"
                        name="full-name"
                        id="full-name"
                        autoComplete="name"
                        className="block w-full py-3 px-4 placeholder-primary/25 bg-gray border-none"
                        placeholder="Your name"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="sr-only">
                        {messageInputLabel}
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="block w-full py-3 px-4 placeholder-primary/25 bg-gray border-none"
                        placeholder="Message"
                        defaultValue=""
                    />
                </div>
                <div className="text-right">
                    <button
                        type="submit"
                        className="inline-flex justify-center py-3 px-10 text-base
                         font-medium text-white bg-primary"
                    >
                        {buttonLabel}
                    </button>
                </div>
            </form>
            <div className="mt-12 flex items-center justify-between">
                <img src={Logo} className="h-10" alt="" />
                <div className="flex items-center justify-center space-x-4 md:space-x-3">
                    {navigation.social.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-primary/50 hover:text-primary
                                p-3 bg-gray rounded"
                        >
                            <span className="sr-only">{item.name}</span>
                            <item.icon className="h-5 w-5" aria-hidden="true" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export default Contact;
