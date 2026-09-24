import { useContext } from "react";
import { AiFillHtml5 } from "react-icons/ai";
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoPostgresql,
  BiLogoReact,
  BiLogoRedux,
  BiLogoSass,
  BiLogoTypescript,
} from "react-icons/bi";
import { SiExpress, SiNestjs, SiNextdotjs } from "react-icons/si";
import { TbBrandSocketIo } from "react-icons/tb";
import { scrollContext } from "../../context/ScrollContext";
import Skill from "../Skill";

const Skills = () => {
  const { skillsRef } = useContext(scrollContext);
  return (
    <section
      className="flex w-full flex-col items-center justify-center text-center"
      ref={skillsRef}
    >
      <h2 className="mb-12 text-[2.5rem] font-bold">Skills</h2>
      <div className="grid w-full max-w-[650px] grid-cols-[repeat(auto-fit,minmax(40px,1fr))] grid-rows-[1fr_1fr] gap-12">
        <Skill tooltip="HTML">
          <AiFillHtml5 />
        </Skill>
        <Skill tooltip="CSS">
          <BiLogoCss3 />
        </Skill>
        <Skill tooltip="Javascript">
          <BiLogoJavascript />
        </Skill>
        <Skill tooltip="React">
          <BiLogoReact />
        </Skill>
        <Skill tooltip="Next.js">
          <SiNextdotjs />
        </Skill>
        <Skill tooltip="Node Js">
          <BiLogoNodejs />
        </Skill>
        <Skill tooltip="Express">
          <SiExpress />
        </Skill>
        <Skill tooltip="NestJS">
          <SiNestjs />
        </Skill>
        <Skill tooltip="Typescript">
          <BiLogoTypescript />
        </Skill>
        <Skill tooltip="Redux">
          <BiLogoRedux />
        </Skill>
        <Skill tooltip="Sass">
          <BiLogoSass />
        </Skill>
        <Skill tooltip="Socket.io">
          <TbBrandSocketIo />
        </Skill>
        <Skill tooltip="MongoDB">
          <BiLogoMongodb />
        </Skill>
        <Skill tooltip="PostgreSQL">
          <BiLogoPostgresql />
        </Skill>
      </div>
    </section>
  );
};

export default Skills;
