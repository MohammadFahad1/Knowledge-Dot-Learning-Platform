import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const courseDetails = useLoaderData();
    const { course, modules } = JSON.parse(courseDetails);
    console.log(courseDetails);
    return (
        <div className='pt-14 bg-slate-400'>
            <div className="mx-auto max-w-5xl px-4 py-8">
                <section className="rounded-lg bg-gray-100 p-8">
                    <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
                        <img
                            alt={course.name}
                            src={course.img}
                            className="aspect-square w-full rounded-lg object-cover"
                        />

                        <blockquote className="sm:col-span-2">
                            <p className="text-xl font-medium sm:text-2xl">
                                {course.description}
                            </p>

                            <cite className="mt-8 inline-flex items-center not-italic">
                                <span className="hidden h-px w-6 bg-gray-400 sm:inline-block"></span>
                                <p className="text-sm uppercase text-gray-500 sm:ml-3">
                                    <strong>{course.name}</strong>
                                </p>
                            </cite>
                        </blockquote>
                    </div>
                </section>
            </div>


            <div class="space-y-4">
                <details class="group" open>
                    <summary
                        class="flex cursor-pointer items-center justify-between rounded-lg bg-gray-50 p-4"
                    >
                        <h2 class="font-medium text-gray-900">
                            Lorem ipsum dolor sit amet consectetur adipisicing?
                        </h2>

                        <svg
                            class="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </summary>

                    <p class="mt-4 px-4 leading-relaxed text-gray-700">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
                        molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
                        voluptate dicta quo officiis explicabo consequuntur distinctio corporis
                        earum similique!
                    </p>
                </details>

                <details class="group">
                    <summary
                        class="flex cursor-pointer items-center justify-between rounded-lg bg-gray-50 p-4"
                    >
                        <h2 class="font-medium text-gray-900">
                            Lorem ipsum dolor sit amet consectetur adipisicing?
                        </h2>

                        <svg
                            class="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </summary>

                    <p class="mt-4 px-4 leading-relaxed text-gray-700">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
                        molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
                        voluptate dicta quo officiis explicabo consequuntur distinctio corporis
                        earum similique!
                    </p>
                </details>
            </div>



        </div>
    );
};

export default CourseDetails;