import React from "react";
import styles from "../styles/components/hero.module.css";
import { Inter } from "next/font/google";
import Tag from "./Tag";
import Image from "next/image";
import { title } from "../constants/images";

const inter = Inter({ subsets: ["latin"] });

function Hero() {
  return (
    <div id="#intro" className={`${styles.container} ${inter.className}`}>
      <div className={styles.subcontainer}>
        <div className={styles.title}>
          <div className={styles.titleText}>Building &nbsp;</div>
          <div className={styles.titleText}>
            <div className={styles.great}>great &nbsp;</div>
            <Image src={title} alt="" className={styles.greatLine} />
          </div>
          <div className={styles.titleText}>things &nbsp;</div>
          <div className={styles.titleText}>one at a time.</div>
        </div>
        <div className={styles.subtitle}>
          with a smidgen of impostor syndrome.
        </div>
        <div className={styles.tags}>
          <Tag text="front-end" color={null} />
          <Tag text="back-end" color={null} />
          <Tag text="full-stack" color={null} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
