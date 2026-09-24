import { createContext, createRef } from "react";

export const scrollContext = createContext({
  projectsRef: createRef(),
  skillsRef: createRef(),
  contactRef: createRef(),
});
