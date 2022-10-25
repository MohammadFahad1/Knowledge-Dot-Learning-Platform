import React from 'react';
import { Link } from 'react-router-dom';

const Course = () => {
    return (
        <article className="flex flex-col md:flex-row bg-white transition hover:shadow-xl shadow-lg border">

            <div className='sm:basis-56'>
                <img
                    alt="Guitar"
                    src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                    className="aspect-square h-full w-full object-cover"
                />
            </div>

            <div className="flex flex-1 flex-col justify-between">
                <div className="border-l border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                    <Link to="/">
                        <h3 className="font-bold uppercase text-gray-900">
                            Finding the right guitar for your style - 5 tips
                        </h3>
                    </Link>

                    <p className="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                        dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
                        sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
                        voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                        Molestias explicabo corporis voluptatem?
                    </p>
                </div>

                <div className="sm:flex sm:items-end sm:justify-end">
                    <Link
                        to="/"
                        className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                    >
                        Start Learning
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default Course;