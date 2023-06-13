'use client';

import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';
const FramerImage = motion(Image);

interface FeaturedArticleProps {
    img: StaticImageData;
    title: string;
    time: string;
    summary: string;
    link: string;
}

const FeaturedArticle: React.FC<FeaturedArticleProps> = ({
    img,
    title,
    time,
    summary,
    link,
}) => {
    return (
        <li className="relative col-span-1 w-full p-4 rounded-2xl border border-solid border-dark bg-light">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl" />
            <Link
                href={link}
                target="_blank"
                className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
            >
                <FramerImage
                    src={img}
                    alt={title}
                    className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                />
            </Link>
            <Link href={link} target="_blank" className="">
                <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline">
                    {title}
                </h2>
            </Link>
            <p className="text-sm mb-2">{summary}</p>
            <span className="text-primary font-semibold">{time}</span>
        </li>
    );
};

export default FeaturedArticle;
