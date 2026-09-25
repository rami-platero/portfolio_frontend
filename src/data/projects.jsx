import { BiLogoJavascript, BiLogoMongodb, BiLogoReact, BiLogoTypescript } from "react-icons/bi";
import {
  SiExpress,
  SiNextdotjs,
  SiPostgresql,
  SiReactquery,
  SiRedux,
} from "react-icons/si";
import { TbBrandSocketIo } from "react-icons/tb";
import GameAppImage from "../assets/img/game app.png";
import GamingComponentsImage from "../assets/img/GamingComponents.png";
import PawsitiveAdoptingImage from "../assets/img/pawsitiveadopting.png";
import VNFImage from "../assets/img/vnf.png";

export const projects = [
  {
    title: "Pawsitive Adopting",
    image: PawsitiveAdoptingImage,
    description:
      "Pawsitive Adoping is an app that works as a platform to help people find a new pet to adopt from all around the world. Users can browse different pets available for adoption, filter them by different criteria, and contact associations directly through the app. It also allows associations to create profiles and upload pets available for adoption.",
    tools: [
      SiPostgresql,
      SiNextdotjs,
      BiLogoReact,
      SiReactquery,
      BiLogoTypescript,
    ],
    demo: "https://pawsitiveadopting.vercel.app/",
    source: "https://github.com/rami-platero/pawsitiveadopting",
  },
  {
    title: "Gaming Components",
    image: GamingComponentsImage,
    description:
      "Gaming Components is a B2C E-Commerce app that sells the most up-to-date pc components. This app integrates Stripe for the checkout sessions and creation of new products, it also has a system to review products, and a user-friendly dashboard UI to update the user information, or keep track of the orders and more.",
    tools: [SiPostgresql, SiExpress, BiLogoReact, SiRedux, BiLogoTypescript],
    demo: "https://gaming-components.vercel.app/",
    source: "https://github.com/rami-platero/gaming-components",
  },
  {
    title: "Trading Game",
    image: GameAppImage,
    description:
      "This trading game is a real time app where users can trade items with other users in different lobbies, with features such as a general chat, private chat while trading, skins, items shop, and more. It also provides a great variety of items, each one with their own rarity.",
    tools: [
      BiLogoMongodb,
      SiExpress,
      BiLogoReact,
      BiLogoTypescript,
      TbBrandSocketIo,
    ],
    demo: "https://multiplayer-trading-game.vercel.app/",
    source: "https://github.com/rami-platero/multiplayer-trading-game",
  },
  {
    title: "VIP NCS Fans",
    image: VNFImage,
    description: (
      <>
        VIP NCS Fans is an app made for a community of fans of the record label{" "}
        <a
          className="font-semibold text-text transition duration-200 ease-in-out hover:text-accent-hover"
          href="https://www.youtube.com/@NoCopyrightSounds"
          target="_blank"
        >
          NoCopyrightSounds
        </a>
        , with the idea to show a big collection of lost media such as high
        quality background images, deleted videos, artists, and more. There is a
        built in system for admin users to upload content.
      </>
    ),
    tools: [BiLogoMongodb, SiExpress, BiLogoReact, BiLogoJavascript],
    demo: "https://vnf-website.vercel.app/",
    source: "https://github.com/rami-platero/VNF-Website",
  },
];
