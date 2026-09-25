import { useContext } from "react";
import { AiFillGithub } from "react-icons/ai";
import { RxOpenInNewWindow } from "react-icons/rx";
import { scrollContext } from "../../context/ScrollContext";
import { projects } from "../../data/projects";

const imageClasses =
  "mx-auto aspect-[2/1] w-full max-w-[600px] border border-outline object-cover transition duration-200 ease-in-out dark:brightness-[0.85]";

const infoClasses =
  "mx-auto flex w-full max-w-[500px] flex-col justify-between gap-4 p-4";

const toolsClasses = "flex justify-center gap-4 [&>svg]:h-10 [&>svg]:w-10";

const buttonClasses =
  "flex w-fit items-center gap-2 rounded-2xl border border-outline p-2 text-[0.8rem] font-semibold text-text no-underline transition duration-200 ease-in-out hover:bg-fill hover:text-on-fill [&>svg]:h-6 [&>svg]:w-6";

const Projects = () => {
  const { projectsRef } = useContext(scrollContext);
  return (
    <section
      className="flex w-full flex-col gap-20 text-center"
      ref={projectsRef}
    >
      <h2 className="text-[2.5rem] font-bold">Projects</h2>
      {projects.map((project) => (
        <div className="flex flex-wrap justify-between" key={project.title}>
          <img
            className={imageClasses}
            src={project.image}
            alt={project.title}
          />
          <div className={infoClasses}>
            <h3 className="text-[1.5rem] font-bold">{project.title}</h3>
            <p className="text-left">{project.description}</p>
            <div className={toolsClasses}>
              {project.tools.map((Tool, index) => (
                <Tool key={index} />
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                className={buttonClasses}
                href={project.demo}
                target="_blank"
              >
                <RxOpenInNewWindow />
                Live Demo
              </a>
              <a
                className={buttonClasses}
                href={project.source}
                target="_blank"
              >
                <AiFillGithub />
                Code Source
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
