'use client';

import { GitHubIcon } from '@/components/Icons';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface ProjectProps {
    type: string;
    title: string;
    img: StaticImageData;
    link: string;
    github: string;
}

const Project: React.FC<ProjectProps> = ({
    type,
    title,
    img,
    link,
    github,
}) => {
    return (
        <article
            className="w-full flex flex-col justify-center items-center rounded-2xl border border-solid 
        border-dark bg-light p-6 relative"
        >
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />
            <Link
                href={link}
                target="_blank"
                className="w-full cursor-pointer overflow-hidden rounded-lg"
            >
                <Image src={img} alt={title} className="w-full h-auto" />
            </Link>
            <div className="w-full flex flex-col justify-between items-start mt-4">
                <span className="text-primary font-medium text-xl">{type}</span>
                <Link
                    href={link}
                    target="_blank"
                    className="hover:underline underline-offset-2"
                >
                    <h2 className="my-2 w-full text-left text-3xl font-bold">
                        {title}
                    </h2>
                </Link>
                <div className="w-full mt-2 flex justify-between items-center">
                    <Link
                        href={link}
                        target="_blank"
                        className="text-lg font-semibold underline"
                    >
                        Visit
                    </Link>
                    <Link href={github} target="_blank" className="w-8">
                        <GitHubIcon />
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default Project;