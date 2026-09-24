import { useContext } from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { scrollContext } from "../../context/ScrollContext";

const cardClasses =
  "grid w-full max-w-[250px] grid-cols-[50px_1fr] grid-rows-[1fr_1fr] p-2 text-left no-underline bg-card transition duration-200 ease-in-out hover:bg-card-hover";

const iconClasses = "row-span-2 h-10 w-10 rounded-full p-[0.3rem] text-text";

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
        <a className={cardClasses} href="mailto:ramiplatero11@gmail.com">
          <FiMail className={iconClasses} />
          <h4 className="text-[0.9rem] font-semibold text-text">Mail me at</h4>
          <h4 className="text-[0.9rem] font-semibold text-accent">
            ramiplatero11@gmail.com
          </h4>
        </a>
        <a
          className={cardClasses}
          href="https://linkedin.com/in/ramiro-platero-9b679b279"
          target="_blank"
        >
          <AiFillLinkedin className={iconClasses} />
          <h4 className="text-[0.9rem] font-semibold text-text">
            Contact me via
          </h4>
          <h4 className="text-[0.9rem] font-semibold text-accent">
            LinkedIn
          </h4>
        </a>
      </div>
    </section>
  );
};

export default Contact;
