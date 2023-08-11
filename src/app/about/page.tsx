'use client';

import AnimatedNumbers from '@/components/AnimatedNumbers';
import AnimatedText from '@/components/AnimatedText';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Head from 'next/head';
import Image from 'next/image';
import profilePic from '../../../public/images/woman-01.png';

const about = () => {
    return (
        <>
            <Head>
                <title>Lorem Ipsum | About Page</title>
                <meta name="description" content="description copy" />
            </Head>
            <main className="flex w-full flex-col items-center justify-center dark:text-light">
                <div className="pt-16">
                    <AnimatedText
                        text="Lorem Ipsum Dolor"
                        className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
                    />
                    <div className="grid 2-full grid-cols-8 gap-16 sm:gap-8">
                        <div className="col-span-3 flex flex-col justify-start items-start xl:col-span-4">
                            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                                Bio
                            </h2>
                            <p className="font-medium">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nulla eget elit et odio varius
                                imperdiet non vel magna. Aliquam suscipit
                                iaculis justo, eget elementum augue imperdiet
                                sit amet. Curabitur et urna vel nisi faucibus
                                elementum sit amet vel lectus.
                            </p>
                            <p className="my-4 font-medium">
                                Nullam velit erat, venenatis nec purus vel,
                                ultrices fermentum orci. Donec consectetur enim
                                in libero ullamcorper varius. Ut tempor magna
                                ipsum, scelerisque gravida quam suscipit quis.
                                Cras vehicula feugiat mauris, eu viverra dolor
                                iaculis id.Nullam vel fringilla orci, et mattis
                                lectus. Sed posuere nec augue in consectetur.
                            </p>
                            <p className="font-medium">
                                Pellentesque pharetra, neque sed laoreet
                                rhoncus, lectus dolor blandit dolor, eu accumsan
                                elit est quis urna. Sed sed rutrum magna. Fusce
                                fringilla egestas metus, at facilisis est tempus
                                finibus. Pellentesque nec tellus ut nisi blandit
                                convallis. Proin ac velit id ligula hendrerit
                                elementum. Aenean non eleifend magna. Sed
                                semper, dui quis dictum bibendum, nisi sapien
                                auctor orci, id laoreet enim augue ac dolor.
                            </p>
                        </div>
                        <div
                            className="col-span-3 relative h-max rounded-2xl border-2 border-solid
                            border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md-order-1"
                        >
                            <div
                                className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark
                            dark:bg-light"
                            />
                            <Image
                                src={profilePic}
                                alt="black and white profile picture"
                                className="w-full h-auto rounded-2xl"
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>

                        <div
                            className="col-span-2 flex flex-col justify-between items-end 
                        xl:col-span-8 xl:flex-row xl:items-center"
                        >
                            <div className="flex flex-col justify-center items-end">
                                <span className="inline-block text-7xl font-bold">
                                    <AnimatedNumbers value={50} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">
                                    lorem ipsum
                                </h2>
                            </div>

                            <div className="flex flex-col justify-center items-end">
                                <span className="inline-block text-7xl font-bold">
                                    <AnimatedNumbers value={40} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">
                                    lorem ipsum
                                </h2>
                            </div>

                            <div className="flex flex-col justify-center items-end">
                                <span className="inline-block text-7xl font-bold">
                                    <AnimatedNumbers value={4} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">
                                    lorem ipsum dolor
                                </h2>
                            </div>
                        </div>
                    </div>
                    <Skills />
                    <Experience />
                </div>
            </main>
        </>
    );
};

export default about;
