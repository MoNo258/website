'use client';
import Link from 'next/link';

interface FooterProps {
    className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
    return (
        <footer
            className="w-full border-t-2 border-solid border- dark font0medium text-lg
        dark:text-light dark:border-light sm:text-base"
        >
            <div className="px-32 py-8 flex items-center justify-between lg:flex-col lg:py-6">
                <span>
                    {new Date().getFullYear()} &copy; All Rights Reserved.
                </span>
                <div className="flex items-center lg:py-2">
                    Build with{' '}
                    <span className="text-primary text-2xl px-1 dark:text-primaryDark">
                        &#9825;
                    </span>
                    by&nbsp;
                    <Link
                        href={'/'}
                        target="_blank"
                        className="underline underline-offset-2"
                    >
                        Dev
                    </Link>
                </div>
                <Link
                    href={'/'}
                    target="_blank"
                    className="underline underline-offset-2"
                >
                    Website
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
