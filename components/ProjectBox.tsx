import React from "react";
import Image from "next/image";
import { Inter, Playfair_Display } from "next/font/google";
import { githubIcon } from "../constants/images";
import styles from "../styles/components/projects.module.css";
import Tag from "./Tag";
import Link from "next/link";

const playfair = Playfair_Display({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

type Props = {
  projectName: string;
  lineUrl: string;
  description: string;
  tags: string[];
  github: string;
};

// TODO: Add animations
function ProjectBox({
  projectName,
  lineUrl,
  description,
  tags,
  github,
}: Props) {
  return (
    <div className={styles.container}>
      <div className={`${styles.title} ${playfair.className}`}>
        <div>{projectName}</div>
        <Image src={lineUrl} alt="" />
      </div>
      <div className={`${styles.description} ${inter.className}`}>
        {description}
      </div>
      <div className={styles.tags}>
        {tags.map((tag: string, i: number) => {
          return <Tag text={tag} color="#7370FF" key={i} />;
        })}
      </div>
      <Link className={styles.github} href={github} target="_blank">
        <Image src={githubIcon} alt="" />
      </Link>
    </div>
  );
}

export default ProjectBox;
