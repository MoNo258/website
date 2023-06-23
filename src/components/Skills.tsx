import Skill from './Skill';

interface SkillsProps {
    className?: string;
}

const Skills: React.FC<SkillsProps> = ({ className }) => {
    return (
        <>
            <h2 className="font-bold text-8xl mt-64 w-full text-center">
                Skills
            </h2>
            <div
                className="w-full h-screen relative flex justify-center items-center rounded-full bg-circularLight
            dark:bg-circularDark"
            >
                <Skill className="!p-6" name="Skill" x="0vw" y="0vw" />
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
