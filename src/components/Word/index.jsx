import React from "react";
import styles from "./index.module.css"

const Word = ({ word, isActive }) => {
  return (
    <div className={`${styles["word"]} ${isActive ? "active" : ""}`}>
      {word.split("").map((l, i) => (
        <span className={styles["letter"]} key={i}>
          {l}
        </span>
      ))}
    </div>
  );
};

export default Word;