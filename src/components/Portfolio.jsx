import Contact from "./Sections/Contact";
import Experience from "./Sections/Experience";
import Hero from "./Sections/Hero";
import Projects from "./Sections/Projects";
import Skills from "./Sections/Skills";

const Portfolio = () => {
  return (
    <main className="flex w-full max-w-[1400px] flex-col gap-[150px] p-4">
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
};

export default Portfolio;
