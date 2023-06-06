'use client';

import AnimatedText from '@/components/AnimatedText';
import { GitHubIcon } from '@/components/Icons';
import Head from 'next/head';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import Project1 from '../../../public/images/projects-1.jpg';

interface FeaturedProjectProps {
    type: string;
    title: string;
    summary: string;
    img: StaticImageData;
    link: string;
    github: string;
}

const FeaturedProject: React.FC<FeaturedProjectProps> = ({
    type,
    title,
    summary,
    img,
    link,
    github,
}) => {
    return (
        <article
            className="w-full flex justify-between items-center rounded-3xl border border-solid 
        border-dark bg-light shadow-2xl p-12"
        >
            <Link
                href={link}
                target="_blank"
                className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
            >
                <Image src={img} alt={title} className="w-full h-auto" />
            </Link>
            <div className="w-1/2 flex flex-col justify-between items-start pl-6">
                <span className="text-primary font-medium text-xl">{type}</span>
                <Link
                    href={link}
                    target="_blank"
                    className="hover:underline underline-offset-2"
                >
                    <h2 className="my-2 w-full text-left text-4xl font-bold">
                        {title}
                    </h2>
                </Link>
                <p className="my-2 font-medium text-dark">{summary}</p>
                <div className="mt-2 flex items-center">
                    <Link href={github} target="_blank" className="w-10">
                        <GitHubIcon />
                    </Link>
                    <Link
                        href={link}
                        target="_blank"
                        className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
                    >
                        Visit Project
                    </Link>
                </div>
            </div>
        </article>
    );
};

const projects = () => {
    return (
        <>
            <Head>
                <title>Lorem Ipsum | Projects Page</title>
                <meta name="description" content="description copy" />
            </Head>
            <main className="w-full mb-16 flex flex-col justify-center items-center">
                <div className="pt-16">
                    <AnimatedText
                        text="Nullam vel fringilla orci"
                        // className="mb-16"
                    />
                    <div className="grid grid-cols-12 gap-24">
                        <div className="col-span-12 flex flex-col justify-start items-start">
                            <FeaturedProject
                                type="Featured Project"
                                title="Project 1"
                                summary="Summary about project 1. Nullam vel fringilla orci, et mattis lectus. Sed posuere nec augue in consectetur. Pellentesque pharetra, neque sed laoreet rhoncus, lectus dolor blandit dolor, eu accumsan elit est quis urna. Sed sed rutrum magna."
                                img={Project1}
                                link="/"
                                github="/"
                            />
                        </div>
                        <div className="col-span-6 ">Project 1</div>
                        <div className="col-span-6 ">Project 2</div>
                        <div className="col-span-12 flex flex-col justify-start items-start">
                            Feature Project
                        </div>
                        <div className="col-span-6 ">Project 1</div>
                        <div className="col-span-6 ">Project 2</div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default projects;
