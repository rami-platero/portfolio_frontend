import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import PFP from "../../assets/img/pfp.png";

const Hero = () => {
  return (
    <section className="flex h-screen w-full flex-wrap items-center justify-between max-[1150px]:my-12">
      <div className="mx-auto flex flex-col gap-4">
        <div>
          <h3 className="text-[1.17rem] font-bold text-[rgb(63,37,211)]">
            Hey there!
          </h3>
          <h1 className="text-[2.7rem] font-bold">I am a Full-Stack Developer</h1>
        </div>
        <p className="max-w-[600px]">
          My name is Ramiro Platero and I'm focused in the web development,
          specializing in the frontend and dedicated on the solution of problems
          and design of user-friendly interfaces.
        </p>
        <div className="flex gap-4">
          <a
            className="text-black no-underline transition duration-200 ease-in-out hover:text-darkblueviolet"
            href="https://linkedin.com/in/ramiro-platero-9b679b279"
            target="_blank"
          >
            <AiFillLinkedin className="h-8 w-8 cursor-pointer" />
          </a>
          <a
            className="text-black no-underline transition duration-200 ease-in-out hover:text-darkblueviolet"
            href="https://github.com/rami-platero"
            target="_blank"
          >
            <AiFillGithub className="h-8 w-8 cursor-pointer" />
          </a>
        </div>
      </div>
      <div className="mx-auto">
        <img
          className="w-full max-w-[470px] rounded-full shadow-[rgba(72,86,133,0.534)_0px_0px_20px]"
          src={PFP}
          alt="Ramiro Platero"
        />
      </div>
    </section>
  );
};

export default Hero;
