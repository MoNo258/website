'use client';
import { motion } from 'framer-motion';
import CustomLink from './CustomLink';
import {
    FacebookIcon,
    GitHubIcon,
    InstagramIcon,
    LinkedInIcon,
    TwitterIcon,
} from './Icons';
import Logo from './Logo';

const Navbar: React.FC = () => {
    return (
        <header className="font-mono w-full px-32 py-8 font-medium flex items-center justify-between">
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

            <div className="absolute left-[50%] top-2 translate-x-[50%]">
                <Logo />
            </div>

            <nav className="flex items-center justify-center flex-wrap">
                <motion.a
                    href="/"
                    target="_blank"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-6 mx-3"
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
                    className="w-6 mx-3"
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
            </nav>
        </header>
    );
};

export default Navbar;
