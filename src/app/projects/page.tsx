'use client';

import AnimatedText from '@/components/AnimatedText';
import FeaturedProject from '@/components/FeaturedProject';
import Project from '@/components/Project';
import TransitionEffect from '@/components/TransitionEffect';
import Head from 'next/head';
import Project1 from '../../../public/images/projects-1.jpg';
import Project2 from '../../../public/images/projects-2.jpg';
import Project3 from '../../../public/images/projects-3.jpg';
import Project4 from '../../../public/images/projects-4.jpg';
import Project5 from '../../../public/images/projects-5.jpg';

const projects = () => {
    return (
        <>
            <Head>
                <title>Lorem Ipsum | Projects Page</title>
                <meta name="description" content="description copy" />
            </Head>
            <TransitionEffect />
            <main className="w-full mb-16 flex flex-col justify-center items-center dark:text-light">
                <div className="pt-16">
                    <AnimatedText
                        text="Nullam vel fringilla orci"
                        className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
                    />
                    <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                        <div className="col-span-12 flex flex-col justify-start items-start">
                            <FeaturedProject
                                type="Featured Project"
                                title="Project 1"
                                summary="Summary about project 1. Nullam vel fringilla orci, et mattis lectus. Sed posuere nec augue in consectetur. Pellentesque pharetra, neque sed laoreet rhoncus, lectus dolor blandit dolor, eu accumsan elit est quis urna. Sed sed rutrum magna."
                                img={Project2}
                                link="/"
                                github="/"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                type="Project"
                                title="Project 2"
                                img={Project3}
                                link="/"
                                github="/"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                type="Project"
                                title="Project 2.1"
                                img={Project5}
                                link="/"
                                github="/"
                            />
                        </div>
                        <div className="col-span-12 flex flex-col justify-start items-start">
                            <FeaturedProject
                                type="Featured Project"
                                title="Project 3"
                                summary="Summary about project 3. Nullam vel fringilla orci, et mattis lectus. Sed posuere nec augue in consectetur. Pellentesque pharetra, neque sed laoreet rhoncus, lectus dolor blandit dolor, eu accumsan elit est quis urna. Sed sed rutrum magna."
                                img={Project4}
                                link="/"
                                github="/"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                type="Project"
                                title="Project 4"
                                img={Project5}
                                link="/"
                                github="/"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                type="Project"
                                title="Project 5"
                                img={Project1}
                                link="/"
                                github="/"
                            />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default projects;
