import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Module from './Module/Module';

const CourseDetails = () => {
    const courseDetails = useLoaderData();
    const { course, modules } = JSON.parse(courseDetails);
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


            <div className="mx-5">
                <div className="space-y-4 py-5 mx-auto" style={{ maxWidth: '900px' }}>
                    {
                        modules.map((module) => <Module key={module.id} module={module}></Module>)
                    }
                </div>
            </div>



        </div>
    );
};

export default CourseDetails;