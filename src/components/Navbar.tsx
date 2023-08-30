'use client';
import useThemeSwitcher from '@/hooks/useThemeSwitcher';
import { motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import CustomLink from './CustomLink';
import HamburgerButton from './HamburgerButton';
import {
    FacebookIcon,
    GitHubIcon,
    InstagramIcon,
    LinkedInIcon,
    MoonIcon,
    SunIcon,
    TwitterIcon,
} from './Icons';
import Logo from './Logo';

interface CustomMobileLinkProps {
    href: string;
    title: string;
    toggle: () => void;
    className?: string;
}

const CustomMobileLink: React.FC<CustomMobileLinkProps> = ({
    href,
    title,
    toggle,
    className,
}) => {
    const pathname = usePathname();
    const router = useRouter();

    const handleClick = () => {
        toggle();
        router.push(href);
    };

    return (
        <button
            className={`${className} relative group text-light dark:text-dark my-2`}
            onClick={() => handleClick()}
        >
            {title}

            <span
                className={`
                h-[1px] inline-block bg-light
                absolute left-0 -bottom-0.5 
                group-hover:w-full transition-[width] ease duration-300
                ${pathname === href ? 'w-full' : 'w-0'}
                dark:bg-dark
            `}
            >
                &nbsp;
            </span>
        </button>
    );
};

const Navbar: React.FC = () => {
    const [mode, setMode] = useThemeSwitcher();

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header
            className="font-mono w-full px-32 py-8 font-medium flex items-center justify-between 
                    dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8"
        >
            <HamburgerButton isOpen={isOpen} handleClick={handleClick} />
            <div className="w-full flex justify-between items-center lg:hidden">
                <nav>
                    <CustomLink href="/" title="Home" className="mr-4" />
                    <CustomLink href="/about" title="About" className="mr-4" />
                    <CustomLink
                        href="/projects"
                        title="Projects"
                        className="mr-4"
                    />
                    <CustomLink href="/articles" title="Articles" />
                </nav>

                <nav className="flex items-center justify-center flex-wrap">
                    <motion.a
                        href="/"
                        target="_blank"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 mx-3 bg-light rounded-full dark:p-0.5"
                    >
                        <FacebookIcon />
                    </motion.a>
                    <motion.a
                        href="/"
                        target="_blank"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 mx-3"
                    >
                        <TwitterIcon />
                    </motion.a>
                    <motion.a
                        href="/"
                        target="_blank"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 mx-3 bg-light rounded-lg dark:p-0.5"
                    >
                        <InstagramIcon />
                    </motion.a>

                    <motion.a
                        href="/"
                        target="_blank"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 mx-3"
                    >
                        <LinkedInIcon />
                    </motion.a>
                    <motion.a
                        href="/"
                        target="_blank"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 mx-3"
                    >
                        <GitHubIcon />
                    </motion.a>

                    <button
                        onClick={() =>
                            setMode(mode === 'light' ? 'dark' : 'light')
                        }
                        className={`ml-3 flex justify-center items-center rounded-full p-1
                    ${
                        mode === 'light'
                            ? 'bg-dark text-light'
                            : 'bg-light text-dark'
                    }
                    `}
                    >
                        {mode === 'dark' ? (
                            <SunIcon className={'fill-dark'} />
                        ) : (
                            <MoonIcon className={'fill-dark'} />
                        )}
                    </button>
                </nav>
            </div>

            {isOpen ? (
                <motion.div
                    initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2
                        -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 rounded-lg 
                        backdrop-blur-md py-32
                        "
                >
                    <nav className="flex flex-col justify-center items-center">
                        <CustomMobileLink
                            href="/"
                            title="Home"
                            className=""
                            toggle={handleClick}
                        />
                        <CustomMobileLink
                            href="/about"
                            title="About"
                            className=""
                            toggle={handleClick}
                        />
                        <CustomMobileLink
                            href="/projects"
                            title="Projects"
                            className=""
                            toggle={handleClick}
                        />
                        <CustomMobileLink
                            href="/articles"
                            title="Articles"
                            toggle={handleClick}
                        />
                    </nav>

                    <nav className="flex items-center justify-center flex-wrap mt-2">
                        <motion.a
                            href="/"
                            target="_blank"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-6 mx-3 bg-light rounded-full dark:p-0.5 sm:mx-1"
                        >
                            <FacebookIcon />
                        </motion.a>
                        <motion.a
                            href="/"
                            target="_blank"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-6 mx-3 sm:mx-1"
                        >
                            <TwitterIcon />
                        </motion.a>
                        <motion.a
                            href="/"
                            target="_blank"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-6 mx-3 bg-light rounded-lg dark:p-0.5 sm:mx-1"
                        >
                            <InstagramIcon />
                        </motion.a>

                        <motion.a
                            href="/"
                            target="_blank"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-6 mx-3 sm:mx-1"
                        >
                            <LinkedInIcon />
                        </motion.a>
                        <motion.a
                            href="/"
                            target="_blank"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-6 mx-3 bg-light rounded-full dark:bg-dark sm:mx-1"
                        >
                            <GitHubIcon />
                        </motion.a>

                        <button
                            onClick={() =>
                                setMode(mode === 'light' ? 'dark' : 'light')
                            }
                            className={`ml-3 flex justify-center items-center rounded-full p-1
                    ${
                        mode === 'light'
                            ? 'bg-dark text-light'
                            : 'bg-light text-dark'
                    }
                    `}
                        >
                            {mode === 'dark' ? (
                                <SunIcon className={'fill-dark'} />
                            ) : (
                                <MoonIcon className={'fill-dark'} />
                            )}
                        </button>
                    </nav>
                </motion.div>
            ) : null}

            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                <Logo />
            </div>
        </header>
    );
};

export default Navbar;
