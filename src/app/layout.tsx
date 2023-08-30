'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { AnimatePresence } from 'framer-motion';
import { Montserrat, Roboto_Mono } from 'next/font/google';
import { usePathname, useRouter } from 'next/navigation';
import Script from 'next/script';
import './globals.css';

const montserrat = Montserrat({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-montserrat',
});

const roboto_mono = Roboto_Mono({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto-mono',
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const router = useRouter();
    const pathname = usePathname();
    return (
        <html lang="en" className="">
            <body
                className={`${montserrat.variable} ${roboto_mono.variable} bg-light text-dark dark:bg-dark `}
            >
                <Script id="theme-switcher" strategy="beforeInteractive">
                    {`
                    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                        document.documentElement.classList.add('dark')
                    } else {
                        document.documentElement.classList.remove('dark')
                    }
                    `}
                </Script>
                <Navbar />
                <AnimatePresence mode="wait">
                    <div
                        key={pathname}
                        className="px-32 py-8 xl:p-24 lg:p-16 md:p-12 sm:p-8"
                    >
                        {children}
                    </div>
                </AnimatePresence>
                <Footer />
            </body>
        </html>
    );
}
