import { AiFillLinkedin } from "react-icons/ai";
import { FiMail } from "react-icons/fi";

export const contactOptions = [
  {
    Icon: FiMail,
    label: "Mail me at",
    value: "ramiplatero11@gmail.com",
    href: "mailto:ramiplatero11@gmail.com",
    external: false,
  },
  {
    Icon: AiFillLinkedin,
    label: "Contact me via",
    value: "LinkedIn",
    href: "https://linkedin.com/in/ramiro-platero-9b679b279",
    external: true,
  },
];
