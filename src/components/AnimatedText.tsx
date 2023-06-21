'use client';
import { motion } from 'framer-motion';

const quote = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.08,
        },
    },
};

const singleWord = {
    initial: {
        opacity: 0,
        y: 50,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
        },
    },
};

interface AnimatedTextProps {
    text: string;
    className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className }) => {
    return (
        <div className="w-fill mx-auto py-2 flex items-center justify-center text-8xl text-center overflow-hidden">
            <motion.h1
                className={`inline-block w-full text-dark font-bold capitalize dark:text-light ${className}`}
                variants={quote}
                initial="initial"
                animate="animate"
            >
                {text.split(' ').map((word, i) => (
                    <motion.span
                        key={`${word}-${i}`}
                        className="inline-block"
                        variants={singleWord}
                    >
                        {word}&nbsp;
                    </motion.span>
                ))}
            </motion.h1>
        </div>
    );
};

export default AnimatedText;
