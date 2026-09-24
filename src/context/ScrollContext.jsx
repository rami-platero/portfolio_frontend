import { createContext, createRef } from "react";

export const scrollContext = createContext({
  projectsRef: createRef(),
  skillsRef: createRef(),
  experienceRef: createRef(),
  contactRef: createRef(),
});
