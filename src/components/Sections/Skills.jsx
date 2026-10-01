import { useContext } from "react";
import { scrollContext } from "../../context/ScrollContext";
import { skills } from "../../data/skills";
import Skill from "../Skill";

const Skills = () => {
  const { skillsRef } = useContext(scrollContext);
  return (
    <section
      className="flex w-full flex-col items-center justify-center text-center"
      ref={skillsRef}
    >
      <h2 className="mb-12 text-[2.5rem] font-bold">Skills</h2>
      <div className="grid w-full max-w-162.5 grid-cols-[repeat(auto-fit,minmax(--spacing(10),1fr))] grid-rows-[1fr_1fr] gap-12">
        {skills.map(({ name, Icon }) => (
          <Skill key={name} tooltip={name}>
            <Icon />
          </Skill>
        ))}
      </div>
    </section>
  );
};

export default Skills;
