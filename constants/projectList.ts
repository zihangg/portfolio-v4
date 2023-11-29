import { chariot, refinance } from "./images";
import { Project } from "./types";

const projects: Project[] = [
  {
    projectName: "Refinance",
    lineUrl: refinance,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim commodo consequat.",
    tags: ["full-stack", "full-stack", "full-stack"],
    github: "https://www.github.com/zihangg/refinance",
  },
  {
    projectName: "Chariot Tracker",
    lineUrl: chariot,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim commodo consequat.",
    tags: ["full-stack", "full-stack", "full-stack"],
    github: "https://www.github.com/tricodesorg/chariot-ui",
  },
];

export { projects };
