import { motion } from 'framer-motion';

interface SkillProps {
    name: string;
    x: string;
    y: string;
}
const Skill: React.FC<SkillProps> = ({ name, x, y }) => {
    return (
        <motion.div
            className="flex justify-center items-center rounded-full font-semibold bg-dark text-light
            py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light 
            lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent 
            xs:text-dark xs:dark:text-light xs:font-bold"
            whileHover={{ scale: 1.2 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y, transition: { duration: 1.0 } }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
        >
            {name}
        </motion.div>
    );
};

export default Skill;
