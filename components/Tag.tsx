import React from "react";
import styles from "../styles/components/tags.module.css";
import { Inter } from "next/font/google";

type Props = {
  text: string;
};

const inter = Inter({ subsets: ["latin"] });

function Tag({ text }: Props) {
  return (
    <div className={`${styles.container} ${inter.className}`}>
      <li>{text}</li>
    </div>
  );
}

export default Tag;
