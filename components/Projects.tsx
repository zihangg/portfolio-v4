import React from "react";
import { projects } from "../constants/projectList";
import { Project } from "../constants/types";
import ProjectBox from "./ProjectBox";
import styles from "../styles/components/projects.module.css";

function Projects() {
  return (
    <div id="#projects" className={styles.parentContainer}>
      {projects.map((project: Project, i: number) => {
        return (
          <ProjectBox
            key={i}
            projectName={project.projectName}
            lineUrl={project.lineUrl}
            description={project.description}
            tags={project.tags}
            github={project.github}
          />
        );
      })}
    </div>
  );
}

export default Projects;
