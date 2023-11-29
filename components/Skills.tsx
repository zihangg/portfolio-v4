import React from "react";
import SkillBox from "./SkillBox";
import styles from "../styles/components/skills.module.css";
import {
  css,
  docker,
  ec2,
  figma,
  github,
  golang,
  js,
  mongo,
  mysql,
  node,
  postgre,
  react,
  redux,
  springboot,
  ts,
} from "../constants/images";

function Skills() {
  return (
    <div className={styles.container}>
      <SkillBox icon={ts} />
      <SkillBox icon={docker} />
      <SkillBox icon={ec2} />
      <SkillBox icon={figma} />
      <SkillBox icon={springboot} />
      <SkillBox icon={golang} />
      <SkillBox icon={js} />
      <SkillBox icon={mongo} />
      <SkillBox icon={mysql} />
      <SkillBox icon={node} />
      <SkillBox icon={postgre} />
      <SkillBox icon={react} />
      <SkillBox icon={redux} />
      <SkillBox icon={css} />
      <SkillBox icon={github} />
    </div>
  );
}

export default Skills;
