import AnimatedText from '@/components/AnimatedText';
import CircularElement from '@/components/CircularElement';
import { LinkArrow } from '@/components/Icons';
import TransitionEffect from '@/components/TransitionEffect';
import Image from 'next/image';
import Link from 'next/link';
import profilePic from '../../public/images/woman.png';
import Lightbulb from '../../public/svg/lightbulb.svg';

interface HomeProps {
    params: { slug: string };
    searchParams: { [key: string]: string | string[] | undefined };
}

export default function Home({ params, searchParams }: HomeProps) {
    return (
        <>
            <TransitionEffect />
            <main className="font-sans w-full min-h-screen flex items-center dark:text-light">
                <div className="flex items-center justify-between w-full lg:flex-col">
                    <div className="w-1/2 md:w-full">
                        <Image
                            src={profilePic}
                            alt="woman profile graphics"
                            className="w-1/2 mx-auto lg:hidden md:flex  md:w-1/2"
                            priority
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                        />
                    </div>
                    <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
                        <AnimatedText
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit."
                            className="!text-6xl !text-left 
                            xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
                        />
                        <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nulla eget elit et odio varius imperdiet non
                            vel magna. Aliquam suscipit iaculis justo, eget
                            elementum augue imperdiet sit amet. Curabitur et
                            urna vel nisi faucibus elementum sit amet vel
                            lectus.
                        </p>
                        <div className="flex items-center self-start mt-2 lg:self-center">
                            <Link
                                href="dummy.pdf"
                                target="_blank"
                                className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg 
                                text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid 
                                border-transparent hover:border-dark dark:bg-light dark:text-dark
                                hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                                md:p-2 md:px-4 md:text-base"
                                download={true}
                            >
                                Resume
                                <LinkArrow className="w-6 ml-1" />
                            </Link>
                            <Link
                                href="mailto:test-dummy-mail@text.io"
                                target="_blank"
                                className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light
                                md:text-base"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
                <CircularElement />
                <div className="absolute right-8 bottom-0 inline-block w-24 md:hidden">
                    <Image
                        src={Lightbulb}
                        alt="lightbulb"
                        className="w-full h-auto"
                    />
                </div>
            </main>
        </>
    );
}
