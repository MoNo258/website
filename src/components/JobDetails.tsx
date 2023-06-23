import { motion } from 'framer-motion';
import { useRef } from 'react';
import LiIcon from './LiIcon';

interface JobDetailsProps {
    position: string;
    company: string;
    companyLink: string;
    time: string;
    address: string;
    work: string;
    className?: string;
}

const JobDetails: React.FC<JobDetailsProps> = ({
    position,
    company,
    companyLink,
    time,
    address,
    work,
}) => {
    const ref = useRef(null);

    return (
        <li
            ref={ref}
            className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col justify-between items-center"
        >
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: 'spring' }}
                className=""
            >
                <h3 className="capitalize font-bold text-2xl">
                    {position}&nbsp;
                    <a
                        href={companyLink}
                        target="_blank"
                        className="text-primary capitalize dark:text-primaryDark"
                    >
                        @{company}
                    </a>
                </h3>
                <span className="capitalize font-medium text-dark/75 dark:text-light/75">
                    {time} | {address}
                </span>
                <p className="font-medium w-full">{work}</p>
            </motion.div>
        </li>
    );
};

export default JobDetails;
