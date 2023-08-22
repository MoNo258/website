import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import JobDetails from './JobDetails';

interface ExperienceProps {
    className?: string;
}
const Experience: React.FC<ExperienceProps> = ({ className }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'center start'],
    });
    return (
        <div className="my-64">
            <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
                Experience
            </h2>
            <div
                ref={ref}
                className="w-[75%] mx-auto relative lg:w-[90%] md:w-full"
            >
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
                                md:w-[2px] md:left-[30px] xs:left-[20px]"
                />
                <ul className="w-full flex flex-col justify-between items-start ml-4 xs:ml-2">
                    <JobDetails
                        position="Position Name"
                        company="Company Name"
                        companyLink="/"
                        time="2022 - Present"
                        address="00000 Address"
                        work="Job description lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nulla eget elit et odio varius
                                imperdiet non vel magna."
                    />
                    <JobDetails
                        position="Position Name"
                        company="Company Name"
                        companyLink="/"
                        time="2021 - 2022"
                        address="00000 Address"
                        work="Job description lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nulla eget elit et odio varius
                                imperdiet non vel magna."
                    />
                    <JobDetails
                        position="Position Name"
                        company="Company Name"
                        companyLink="/"
                        time="2020 - 2021"
                        address="00000 Address"
                        work="Job description lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nulla eget elit et odio varius
                                imperdiet non vel magna."
                    />
                    <JobDetails
                        position="Position Name"
                        company="Company Name"
                        companyLink="/"
                        time="2017 - 2020"
                        address="00000 Address"
                        work="Job description lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nulla eget elit et odio varius
                                imperdiet non vel magna."
                    />
                </ul>
            </div>
        </div>
    );
};

export default Experience;
