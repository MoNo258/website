import AnimatedText from '@/components/AnimatedText';
import CustomLink from '@/components/CustomLink';
import TransitionEffect from '@/components/TransitionEffect';
import Head from 'next/head';

export default function NotFound() {
    return (
        <>
            <Head>
                <title>Lorem Ipsum | Not Found</title>
                <meta name="description" content="description copy" />
            </Head>
            <TransitionEffect />
            <main className="w-full mb-16 flex flex-col justify-center items-center dark:text-light">
                <div className="pt-16">
                    <AnimatedText
                        text="Page not found"
                        className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
                    />
                    <div className="w-full text-4xl lg:text-2xl lg:text-center">
                        <CustomLink
                            href="/"
                            title="Home"
                            className="text-primary dark:text-primaryDark"
                        />
                    </div>
                </div>
            </main>
        </>
    );
}
