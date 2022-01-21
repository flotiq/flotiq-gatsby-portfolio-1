import React from 'react';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { BellIcon } from '@heroicons/react/solid';

const Header = () => (
    <Disclosure as="nav" className="bg-white shadow">
        {({ open }) => (
            <>
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex justify-between h-16">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            {/* Mobile menu button */}
                            <Disclosure.Button className="inline-flex items-center justify-center
                            p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100
                            focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                            >
                                <span className="sr-only">Open main menu</span>
                                {open ? (
                                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                                ) : (
                                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                )}
                            </Disclosure.Button>
                        </div>
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex-shrink-0 flex items-center">
                                <img
                                    className="block lg:hidden h-8 w-auto"
                                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                    alt="Workflow"
                                />
                                <img
                                    className="hidden lg:block h-8 w-auto"
                                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                                    alt="Workflow"
                                />
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center
                        pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
                        >
                            <button
                                type="button"
                                className="bg-white p-1 rounded-full text-gray-400
                                hover:text-gray-500 focus:outline-none focus:ring-2
                                focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                <span className="sr-only">View notifications</span>
                                <BellIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                </div>

                <Disclosure.Panel className="sm:hidden">
                    <div className="pt-2 pb-4 space-y-1">
                        <p>Your menu items here...</p>
                    </div>
                </Disclosure.Panel>
            </>
        )}
    </Disclosure>
);

export default Header;
