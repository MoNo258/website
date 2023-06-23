'use client';
import useThemeSwitcher from '@/hooks/useThemeSwitcher';
import { motion } from 'framer-motion';
import CustomLink from './CustomLink';
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

const Navbar: React.FC = () => {
    const [mode, setMode] = useThemeSwitcher();

    return (
        <header className="font-mono w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light">
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
                    onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
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

            <div className="absolute left-[50%] top-2 translate-x-[50%]">
                <Logo />
            </div>
        </header>
    );
};

export default Navbar;
