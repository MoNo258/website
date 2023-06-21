'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const MotionLink = motion(Link);

const Logo = () => {
    return (
        <div className="flex items-center justify-center mt-2">
            <MotionLink
                href="/"
                className="w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl 
                font-bold border border-solid border-transparent dark:border-light"
                whileHover={{
                    backgroundColor: [
                        '#121212',
                        '#C71585',
                        '#8E0000',
                        '#6B3FA0',
                        '#000741',
                    ],
                    transition: { duration: 1, repeat: Infinity },
                }}
            >
                Logo
            </MotionLink>
        </div>
    );
};

export default Logo;
