import React from 'react';

const FAQ = () => {
    return (
        <div className='bg-slate-400 py-32'>
            <h1 className='text-3xl font-bold text-center text-white bg-orange-500 py-5 px-3'>Frequently Asked Questions</h1>
            <div className="space-y-4 mx-5 mt-12">
                <details className="group border-l-4 border-green-500 bg-gray-50 p-6" open>
                    <summary className="flex cursor-pointer items-center justify-between">
                        <h5 className="text-lg font-medium text-gray-900">
                            what is Knowledge-dot ?
                        </h5>

                        <span
                            className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-gray-700">
                        Knowledge-dot is a free learning website where you can learn different Programming Languages for free.
                    </p>
                </details>

                <details className="group border-l-4 border-green-500 bg-gray-50 p-6">
                    <summary className="flex cursor-pointer items-center justify-between">
                        <h5 className="text-lg font-medium text-gray-900">
                            How much money do you charge ?
                        </h5>

                        <span
                            className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-gray-700">
                        It is a free website, and all our courses are also completely for free.
                    </p>
                </details>

                <details className="group border-l-4 border-green-500 bg-gray-50 p-6">
                    <summary className="flex cursor-pointer items-center justify-between">
                        <h5 className="text-lg font-medium text-gray-900">
                            How long it will take to learn a programming language ?
                        </h5>

                        <span
                            className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-gray-700">
                        It all depends on you how much time & effort you are giving behind the language.
                    </p>
                </details>
                <details className="group border-l-4 border-green-500 bg-gray-50 p-6">
                    <summary className="flex cursor-pointer items-center justify-between">
                        <h5 className="text-lg font-medium text-gray-900">
                            Can I learn Programming ?
                        </h5>

                        <span
                            className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-gray-700">
                        ofcourse you can learn programming, it's all free in Knowledge dot. you can follow our modules be a successfull porgrammer.
                    </p>
                </details>
            </div>
        </div>
    );
};

export default FAQ;