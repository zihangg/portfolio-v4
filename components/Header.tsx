import Link from "next/link";
import React from "react";
import styles from "../styles/components/header.module.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

function Header() {
  return (
    <nav className={`${styles.header} ${montserrat.className}`}>
      <Link href="#intro" className={styles.navlinks}>
        zihang
      </Link>
      <div className={styles.central}>
        <Link href="#work" className={styles.navlinks}>
          Work
        </Link>
        <Link href="#projects" className={styles.navlinks}>
          Projects
        </Link>
        <Link href="#skills" className={styles.navlinks}>
          Skills
        </Link>
      </div>
      {/* TODO: change to email*/}
      <Link href="#contact" className={styles.navlinks}>
        Contact
      </Link>
    </nav>
  );
}

export default Header;
