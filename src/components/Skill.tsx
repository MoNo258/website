import { motion } from 'framer-motion';

interface SkillProps {
    name: string;
    x: string;
    y: string;
    className?: string;
}
const Skill: React.FC<SkillProps> = ({ name, x, y, className }) => {
    return (
        <motion.div
            className={`flex justify-center items-center rounded-full font-semibold bg-dark text-light
            py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light ${className}`}
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
