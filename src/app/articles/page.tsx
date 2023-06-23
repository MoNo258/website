'use client';

import AnimatedText from '@/components/AnimatedText';
import Article from '@/components/Article';
import FeaturedArticle from '@/components/FeaturedArticle';
import Head from 'next/head';
import Article1 from '../../../public/images/article-1.jpg';
import Article2 from '../../../public/images/article-2.jpg';
import Article3 from '../../../public/images/article-3.jpg';

const articles = () => {
    return (
        <>
            <Head>
                <title>Lorem Ipsum | Articles Page</title>
                <meta name="description" content="description copy" />
            </Head>
            <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden  dark:text-light">
                <div className="pt-16">
                    <AnimatedText
                        text="Ut viverra sapien, eu lobortis nibh"
                        className="mb-16"
                    />
                    <ul className="grid grid-cols-2 gap-16">
                        <FeaturedArticle
                            title="Featured Article 1"
                            img={Article1}
                            link="/"
                            summary="Aliquam tempor erat nec diam sodales, sit amet congue velit tempus. Duis in nulla blandit, placerat tortor vel, tempor odio. Praesent erat nibh, dignissim vitae ultricies vestibulum, cursus vel augue. Aenean enim lacus, iaculis vitae rutrum quis, facilisis a diam."
                            time="5 min read"
                        />
                        <FeaturedArticle
                            title="Featured Article 2"
                            img={Article2}
                            link="/"
                            summary="Integer magna diam, ornare sed enim sit amet, volutpat consequat odio. Vestibulum in pulvinar diam. Mauris lacinia tempus nulla non viverra. Morbi pellentesque pellentesque eros eget sodales. Aenean pellentesque lacus neque, quis ornare urna viverra vitae. Integer vestibulum justo ut sagittis viverra."
                            time="6 min read"
                        />
                    </ul>
                    <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
                        All Articles
                    </h2>
                    <ul>
                        <Article
                            title="Another one, Article. This is titile. Sed sed rutrum magna."
                            date="June 3rd, 2023"
                            link="/"
                            img={Article1}
                        />
                        <Article
                            title="And another, Article. Aenean non eleifend magna."
                            date="May 4th, 2023"
                            link="/"
                            img={Article2}
                        />
                        <Article
                            title="Yet another, Article. Etiam auctor ligula vel dictum elementum."
                            date="May 3rd, 2023"
                            link="/"
                            img={Article3}
                        />
                        <Article
                            title="The one before last, Article. Proin auctor eu justo quis scelerisque."
                            date="May 2nd, 2023"
                            link="/"
                            img={Article2}
                        />
                        <Article
                            title="Last one here, Article. Quisque gravida ante eget nisi mollis sagittis."
                            date="May 1st, 2023"
                            link="/"
                            img={Article3}
                        />
                    </ul>
                </div>
            </main>
        </>
    );
};

export default articles;
