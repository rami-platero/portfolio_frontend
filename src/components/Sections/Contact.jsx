import { useContext } from "react";
import { scrollContext } from "../../context/ScrollContext";
import { contactOptions } from "../../data/contact";

const cardClasses =
  "grid w-full max-w-[250px] grid-cols-[50px_1fr] grid-rows-[1fr_1fr] p-2 text-left no-underline bg-card transition duration-200 ease-in-out hover:bg-card-hover";

const iconClasses = "row-span-2 h-10 w-10 rounded-full p-[0.3rem] text-text";

const labelClasses = "text-[0.9rem] font-semibold text-text";

const Contact = () => {
  const { contactRef } = useContext(scrollContext);
  return (
    <section
      className="mt-[50px] flex flex-col justify-center gap-8 text-center"
      ref={contactRef}
    >
      <h2 className="text-[2.5rem] font-bold">Contact Me</h2>
      <p className="mb-8">
        If you liked any of my projects feel free to contact me via these
        options.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4 select-none">
        {contactOptions.map(({ Icon, label, value, href, external }) => (
          <a
            className={cardClasses}
            href={href}
            key={value}
            target={external ? "_blank" : undefined}
          >
            <Icon className={iconClasses} />
            <h4 className={labelClasses}>{label}</h4>
            <h4 className="text-[0.9rem] font-semibold text-accent">{value}</h4>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
