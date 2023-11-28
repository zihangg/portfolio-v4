import React from "react";
import styles from "../styles/components/work.module.css";

type Props = {
  isSelected: boolean;
  onClick: () => void;
};
function CustomIndicator({ isSelected, onClick }: Props) {
  return (
    <div
      className={styles.indicator}
      style={isSelected ? { backgroundColor: "#7370FF" } : null}
      onClick={onClick}
    />
  );
}

export default CustomIndicator;
