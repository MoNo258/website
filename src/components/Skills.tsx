import { motion } from 'framer-motion';
import Skill from './Skill';

interface SkillsProps {
    className?: string;
}

const Skills: React.FC<SkillsProps> = ({ className }) => {
    return (
        <>
            <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
                Skills
            </h2>
            <div
                className="w-full h-screen relative flex justify-center items-center rounded-full bg-circularLight
            dark:bg-circularDark
            lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg
            md:bg-circularLightMd md:dark:bg-circularDarkMd
            sm:bg-circularLightSm sm:dark:bg-circularDarkSm"
            >
                <motion.div
                    className="flex justify-center items-center rounded-full font-semibold bg-dark text-light
            p-6 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2"
                    whileHover={{ scale: 1.2 }}
                >
                    Skill
                </motion.div>

                <Skill name="Skill1" x="-20vw" y="2vw" />
                <Skill name="Skill2" x="-5vw" y="-10vw" />
                <Skill name="Skill3" x="20vw" y="6vw" />
                <Skill name="Skill4" x="0vw" y="12vw" />
                <Skill name="Skill5" x="-20vw" y="-15vw" />
                <Skill name="Skill6" x="15vw" y="-12vw" />
                <Skill name="Skill7" x="32vw" y="-5vw" />
                <Skill name="Skill8" x="0vw" y="-20vw" />
                <Skill name="Skill9" x="-25vw" y="18vw" />
                <Skill name="Skill10" x="18vw" y="18vw" />
            </div>
        </>
    );
};

export default Skills;
