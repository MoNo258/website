'use client';

import { motion, useMotionValue } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';
const FramerImage = motion(Image);

interface MovingImgProps {
    img: StaticImageData;
    title: string;
    link: string;
}

const MovingImg: React.FC<MovingImgProps> = ({ img, title, link }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef<HTMLDivElement>(null);

    function handleMouse(event: React.MouseEvent) {
        imgRef.current!.style.display = 'inline-block';
        x.set(event.pageX);
        y.set(-10);
    }
    function handleMouseLeave(event: React.MouseEvent) {
        imgRef.current!.style.display = 'none';
        x.set(0);
        y.set(0);
    }

    return (
        <Link
            href={link}
            target="_blank"
            className=""
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}
        >
            <h2 className="capitalize text-xl font-semibold hover:underline">
                {title}
            </h2>
            <FramerImage
                style={{ x: x, y: y }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
                ref={imgRef}
                src={img}
                alt={title}
                className="absolute z-10 w-96 h-auto hidden rounded-lg"
            />
        </Link>
    );
};

export default MovingImg;
