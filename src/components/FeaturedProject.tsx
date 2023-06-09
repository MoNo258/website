'use client';

import { GitHubIcon } from '@/components/Icons';
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

const FramerImage = motion(Image);

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
            className="w-full flex justify-between items-center relative rounded-br-2xl rounded-3xl border
                border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light"
        >
            <div
                className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl
            dark:bg-light"
            />
            <Link
                href={link}
                target="_blank"
                className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
            >
                <FramerImage
                    src={img}
                    alt={title}
                    className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                />
            </Link>
            <div className="w-1/2 flex flex-col justify-between items-start pl-6">
                <span className="text-primary font-medium text-xl dark:text-primaryDark">
                    {type}
                </span>
                <Link
                    href={link}
                    target="_blank"
                    className="hover:underline underline-offset-2"
                >
                    <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light">
                        {title}
                    </h2>
                </Link>
                <p className="my-2 font-medium text-dark dark:text-light">
                    {summary}
                </p>
                <div className="mt-2 flex items-center">
                    <Link href={github} target="_blank" className="w-10">
                        <GitHubIcon />
                    </Link>
                    <Link
                        href={link}
                        target="_blank"
                        className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold 
                        dark:bg-light dark:text-dark"
                    >
                        Visit Project
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default FeaturedProject;
