import { useContext } from "react";
import { scrollContext } from "../../context/ScrollContext";
import { experience } from "../../data/experience";

const Experience = () => {
  const { experienceRef } = useContext(scrollContext);
  return (
    <section
      className="flex w-full flex-col items-center gap-8 text-center"
      ref={experienceRef}
    >
      <h2 className="mb-4 text-[2.5rem] font-bold">Work Experience</h2>
      {experience.map((job) => (
        <article
          className="w-full max-w-[800px] rounded-2xl border border-hairline bg-surface p-6 text-left shadow-[var(--shadow-soft)] sm:p-8"
          key={`${job.company}-${job.role}`}
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="text-[1.5rem] font-bold">{job.role}</h3>
              <p className="mt-1 font-semibold text-accent">{job.company}</p>
            </div>
            <span className="rounded-full bg-accent-soft px-3 py-1 text-[0.8rem] font-semibold text-text">
              {job.period}
            </span>
          </div>

          <p className="mt-5">{job.summary}</p>

          <ul className="mt-5 flex flex-col gap-3">
            {job.highlights.map((highlight) => (
              <li className="flex gap-3" key={highlight}>
                <span className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-darkblueviolet" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {job.stack.map((tool) => (
              <span
                className="rounded-full border border-hairline px-3 py-1 text-[0.75rem] font-semibold text-muted"
                key={tool}
              >
                {tool}
              </span>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
};

export default Experience;
