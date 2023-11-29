import Link from "next/link";
import React from "react";
import styles from "../styles/components/header.module.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

function Header() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();

    const href = e.currentTarget.href;
    const target = href.replace(/.*\#/, "");
    const elem = document.getElementById(target);

    elem.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className={`${styles.header} ${montserrat.className}`}>
      <Link href="#intro" className={styles.navlinks}>
        zihang
      </Link>
      <div className={styles.central}>
        <Link href="#work" onClick={handleScroll} className={styles.navlinks}>
          Work
        </Link>
        <Link
          href="#projects"
          onClick={handleScroll}
          className={styles.navlinks}
        >
          Projects
        </Link>
        <Link href="#skills" onClick={handleScroll} className={styles.navlinks}>
          Skills
        </Link>
      </div>
      {/* TODO: change to email*/}
      <Link href="#contact" onClick={handleScroll} className={styles.navlinks}>
        Contact
      </Link>
    </nav>
  );
}

export default Header;
