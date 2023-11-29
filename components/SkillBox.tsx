import React from "react";
import styles from "../styles/components/skills.module.css";
import Image from "next/image";

type Props = {
  icon: string;
};

function SkillBox({ icon }: Props) {
  return (
    <div className={styles.boxContainer}>
      <Image src={icon} alt="" />
    </div>
  );
}

export default SkillBox;
