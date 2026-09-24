import { useContext } from "react";
import { AiFillGithub } from "react-icons/ai";
import { BiLogoJavascript, BiLogoMongodb, BiLogoReact, BiLogoTypescript } from "react-icons/bi";
import { RxOpenInNewWindow } from "react-icons/rx";
import {
  SiExpress,
  SiNextdotjs,
  SiPostgresql,
  SiReactquery,
  SiRedux,
} from "react-icons/si";
import { TbBrandSocketIo } from "react-icons/tb";
import { scrollContext } from "../../context/ScrollContext";
import GameAppImage from "../../assets/img/game app.png";
import GamingComponentsImage from "../../assets/img/GamingComponents.png";
import PawsitiveAdoptingImage from "../../assets/img/pawsitiveadopting.png";
import VNFImage from "../../assets/img/vnf.png";

const imageClasses =
  "mx-auto aspect-[16/8.5] w-full max-w-[600px] border border-black transition duration-200 ease-in-out";

const infoClasses =
  "mx-auto flex w-full max-w-[500px] flex-col justify-between gap-4 p-4";

const toolsClasses = "flex justify-center gap-4 [&>svg]:h-10 [&>svg]:w-10";

const buttonsClasses = "flex flex-wrap justify-center gap-4";

const buttonClasses =
  "flex w-fit items-center gap-2 rounded-2xl border border-black p-2 text-[0.8rem] font-semibold text-black no-underline transition duration-200 ease-in-out hover:bg-black hover:text-white [&>svg]:h-6 [&>svg]:w-6";

const Projects = () => {
  const { projectsRef } = useContext(scrollContext);
  return (
    <section
      className="flex w-full flex-col gap-20 text-center"
      ref={projectsRef}
    >
      <h2 className="text-[2.5rem] font-bold">Projects</h2>
      <div className="flex flex-wrap justify-between">
        <img
          className={imageClasses}
          src={PawsitiveAdoptingImage}
          alt="Pawsitive Adopting"
        />
        <div className={infoClasses}>
          <h3 className="text-[1.5rem] font-bold">Pawsitive Adopting</h3>
          <p className="text-left">
            Pawsitive Adoping is an app that works as a platform to help people
            find a new pet to adopt from all around the world. Users can browse
            different pets available for adoption, filter them by different
            criteria, and contact associations directly through the app. It also
            allows associations to create profiles and upload pets available for
            adoption.
          </p>
          <div className={toolsClasses}>
            <SiPostgresql />
            <SiNextdotjs />
            <BiLogoReact />
            <SiReactquery />
            <BiLogoTypescript />
          </div>
          <div className={buttonsClasses}>
            <a
              className={buttonClasses}
              href="https://pawsitiveadopting.vercel.app/"
              target="_blank"
            >
              <RxOpenInNewWindow />
              Live Demo
            </a>
            <a
              className={buttonClasses}
              href="https://github.com/rami-platero/pawsitiveadopting"
              target="_blank"
            >
              <AiFillGithub />
              Code Source
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-between">
        <img className={imageClasses} src={GamingComponentsImage} alt="" />
        <div className={infoClasses}>
          <h3 className="text-[1.5rem] font-bold">Gaming Components</h3>
          <p className="text-left">
            Gaming Components is a B2C E-Commerce app that sells the most
            up-to-date pc components. This app integrates Stripe for the checkout
            sessions and creation of new products, it also has a system to review
            products, and a user-friendly dashboard UI to update the user
            information, or keep track of the orders and more.
          </p>
          <div className={toolsClasses}>
            <SiPostgresql />
            <SiExpress />
            <BiLogoReact />
            <SiRedux />
            <BiLogoTypescript />
          </div>
          <div className={buttonsClasses}>
            <a
              className={buttonClasses}
              href="https://gaming-components.vercel.app/"
              target="_blank"
            >
              <RxOpenInNewWindow />
              Live Demo
            </a>
            <a
              className={buttonClasses}
              href="https://github.com/rami-platero/gaming-components"
              target="_blank"
            >
              <AiFillGithub />
              Code Source
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-between">
        <img className={imageClasses} src={GameAppImage} alt="" />
        <div className={infoClasses}>
          <h3 className="text-[1.5rem] font-bold">Trading Game</h3>
          <p className="text-left">
            This trading game is a real time app where users can trade items with
            other users in different lobbies, with features such as a general
            chat, private chat while trading, skins, items shop, and more. It also
            provides a great variety of items, each one with their own rarity.
          </p>
          <div className={toolsClasses}>
            <BiLogoMongodb />
            <SiExpress />
            <BiLogoReact />
            <BiLogoTypescript />
            <TbBrandSocketIo />
          </div>
          <div className={buttonsClasses}>
            <a
              className={buttonClasses}
              href="https://multiplayer-trading-game.vercel.app/"
              target="_blank"
            >
              <RxOpenInNewWindow />
              Live Demo
            </a>
            <a
              className={buttonClasses}
              href="https://github.com/rami-platero/multiplayer-trading-game"
              target="_blank"
            >
              <AiFillGithub />
              Code Source
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-between">
        <img className={imageClasses} src={VNFImage} alt="" />
        <div className={infoClasses}>
          <h3 className="text-[1.5rem] font-bold">VIP NCS Fans</h3>
          <p className="text-left">
            VIP NCS Fans is an app made for a community of fans of the record
            label{" "}
            <a
              className="font-semibold text-black transition duration-200 ease-in-out hover:text-[rgba(49,35,255,0.562)]"
              href="https://www.youtube.com/@NoCopyrightSounds"
              target="_blank"
            >
              NoCopyrightSounds
            </a>
            , with the idea to show a big collection of lost media such as high
            quality background images, deleted videos, artists, and more. There is
            a built in system for admin users to upload content.
          </p>
          <div className={toolsClasses}>
            <BiLogoMongodb />
            <SiExpress />
            <BiLogoReact />
            <BiLogoJavascript />
          </div>
          <div className={buttonsClasses}>
            <a
              className={buttonClasses}
              href="https://vnf-website.vercel.app/"
              target="_blank"
            >
              <RxOpenInNewWindow />
              Live Demo
            </a>
            <a
              className={buttonClasses}
              href="https://github.com/rami-platero/VNF-Website"
              target="_blank"
            >
              <AiFillGithub />
              Code Source
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
