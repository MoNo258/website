'use client';

import AnimatedText from '@/components/AnimatedText';
import CircularElement from '@/components/CircularElement';
import { LinkArrow } from '@/components/Icons';
import Image, { ImageLoader } from 'next/image';
import Link from 'next/link';
import profilePic from '../../public/images/woman.png';
import Lightbulb from '../../public/svg/lightbulb.svg';

const imageLoader: ImageLoader = ({ src, width, quality }) => {
    return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
};

interface HomeProps {
    params: { slug: string };
    searchParams: { [key: string]: string | string[] | undefined };
}

export default function Home({ params, searchParams }: HomeProps) {
    return (
        <>
            <main className="font-sans w-full min-h-screen flex items-center dark:text-light">
                <div className="flex items-center justify-between w-full">
                    <div className="w-1/2">
                        <Image
                            src={profilePic}
                            alt="woman profile graphics"
                            className="w-1/2 mx-auto"
                            priority
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                        />

                        <Image
                            loader={imageLoader}
                            src={profilePic}
                            alt="woman profile graphics"
                            width={500}
                            height={500}
                            className="w-1/2 mx-auto"
                            priority
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                        />
                    </div>
                    <div className="w-1/2 flex flex-col items-center self-center">
                        <AnimatedText
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit."
                            className="!text-6xl text-left"
                        />
                        <p className="my-4 text-base font-medium">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nulla eget elit et odio varius imperdiet non
                            vel magna. Aliquam suscipit iaculis justo, eget
                            elementum augue imperdiet sit amet. Curabitur et
                            urna vel nisi faucibus elementum sit amet vel
                            lectus.
                        </p>
                        <div className="flex items-center self-start mt-2">
                            <Link
                                href="dummy.pdf"
                                target="_blank"
                                className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg 
                                text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid 
                                border-transparent hover:border-dark dark:bg-light dark:text-dark
                                hover:dark:bg-dark hover:dark:text-light hover:dark:border-light"
                                download={true}
                            >
                                Resume
                                <LinkArrow className="w-6 ml-1" />
                            </Link>
                            <Link
                                href="mailto:test-dummy-mail@text.io"
                                target="_blank"
                                className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
                <CircularElement />
                <div className="absolute right-8 bottom-0 inline-block w-24">
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
