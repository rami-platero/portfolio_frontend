import PFP from "../../assets/img/pfp.png";
import { socials } from "../../data/socials";

const Hero = () => {
  return (
    <section className="flex h-screen w-full flex-wrap items-center justify-between max-[1150px]:my-12">
      <div className="mx-auto flex flex-col gap-4">
        <div>
          <p className="text-[1.17rem] font-bold text-accent-strong">
            Hey there!
          </p>
          <h1 className="text-[2.7rem] font-bold">I am a Full-Stack Developer</h1>
        </div>
        <p className="max-w-[600px]">
          My name is Ramiro Platero and I'm focused in the web development,
          specializing in the frontend and dedicated on the solution of problems
          and design of user-friendly interfaces.
        </p>
        <div className="flex gap-4">
          {socials.map(({ name, Icon, href }) => (
            <a
              className="rounded-full text-text no-underline transition duration-200 ease-in-out hover:text-darkblueviolet focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
              href={href}
              key={name}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name} (opens in a new tab)`}
            >
              <Icon className="h-8 w-8 cursor-pointer" />
            </a>
          ))}
        </div>
      </div>
      <div className="mx-auto">
        <img
          className="w-full max-w-[470px] rounded-full shadow-[var(--shadow-portrait)]"
          src={PFP}
          width={948}
          height={920}
          alt="Ramiro Platero"
        />
      </div>
    </section>
  );
};

export default Hero;
