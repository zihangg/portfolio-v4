import React from "react";
import styles from "../styles/components/tags.module.css";
import { Inter } from "next/font/google";

type Props = {
  text: string;
  color: string;
};

const inter = Inter({ subsets: ["latin"] });

function Tag({ text, color }: Props) {
  return (
    <div
      className={`${styles.container} ${inter.className}`}
      style={{
        backgroundColor: color,
        color: color === "#7370FF" && "#eeeeee",
      }}
    >
      <li>{text}</li>
    </div>
  );
}

export default Tag;
