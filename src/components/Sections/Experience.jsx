import { useContext } from "react";
import { scrollContext } from "../../context/ScrollContext";

const highlights = [
  "Build and maintain the NestJS backend, the athlete-facing mobile app (React Native with Expo, iOS & Android) and the gym-facing web app (Next.js).",
  "Integrated Apple HealthKit data into the backend to power AI-generated performance reports and summaries for athletes.",
  "Designed dashboards to track calories, class attendance, heart-rate zones and historical workout comparisons.",
  "Contributed to releasing the MVP (v1.0.0) on the App Store, now piloting with a gym and its first ~10 athlete users.",
];

const stack = [
  "NestJS",
  "Next.js",
  "React Native",
  "Expo",
  "AWS",
  "Terraform",
  "Figma",
];

const Experience = () => {
  const { experienceRef } = useContext(scrollContext);
  return (
    <section
      className="flex w-full flex-col items-center text-center"
      ref={experienceRef}
    >
      <h2 className="mb-12 text-[2.5rem] font-bold">Work Experience</h2>
      <article className="w-full max-w-[800px] rounded-2xl border border-darkcolor/10 bg-white p-6 text-left shadow-[0_8px_30px_rgba(19,26,48,0.08)] sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-[1.5rem] font-bold">Full Stack Developer</h3>
            <p className="mt-1 font-semibold text-blueviolet2">Novabit</p>
          </div>
          <span className="rounded-full bg-lightblueviolet px-3 py-1 text-[0.8rem] font-semibold text-darkcolor">
            May 2026 — Present
          </span>
        </div>

        <p className="mt-5">
          Full-stack developer on a multi-tenant fitness platform connecting gyms
          with their athletes. Involved since the project's inception, from
          initial planning and UI/UX design in Figma through full-stack
          development across backend, mobile and web.
        </p>

        <ul className="mt-5 flex flex-col gap-3">
          {highlights.map((highlight) => (
            <li className="flex gap-3" key={highlight}>
              <span className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-darkblueviolet" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {stack.map((tool) => (
            <span
              className="rounded-full border border-darkcolor/10 px-3 py-1 text-[0.75rem] font-semibold text-darkcolor/80"
              key={tool}
            >
              {tool}
            </span>
          ))}
        </div>
      </article>
    </section>
  );
};

export default Experience;
