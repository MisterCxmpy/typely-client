import React, { useEffect, useRef, useState } from "react";
import Word from "../Word";
import styles from "./index.module.css"

const WordsContainer = ({ shuffle }) => {
  const wordsRef = useRef(null);
  const cursorRef = useRef(null);

  const [shuffleIndex, setShuffleIndex] = useState(0);
  const [activeWord, setActiveWord] = useState("");
  const [activeWordChar, setactiveWordChar] = useState(0);

  useEffect(() => {
    setActiveWord(shuffle[shuffleIndex]);

    if (wordsRef.current) {
      wordsRef.current.focus();
    }
  }, [shuffleIndex, shuffle]);

  const handleKeyDown = (e) => {
    let key = e.key;

    cursorRef.current.style.animation = "none";

    if (key === "Backspace") {
      if (activeWordChar > 0) {
        e.target.childNodes[shuffleIndex].childNodes[activeWordChar - 1].classList.remove("correct", "incorrect");
        setactiveWordChar(activeWordChar - 1);
        cursorRef.current.style.top =
          e.target.childNodes[shuffleIndex].childNodes[activeWordChar - 1].getBoundingClientRect().top + 4 + "px";
        cursorRef.current.style.left =
          e.target.childNodes[shuffleIndex].childNodes[activeWordChar - 1].getBoundingClientRect().left + "px";
      }
    } else {
      if (activeWordChar < activeWord.length) {
        if (e.target.childNodes[shuffleIndex].childNodes[activeWordChar].getBoundingClientRect().top > 85) {
          wordsRef.current.style.marginTop = "-40px";
        }

        if (key === activeWord[activeWordChar]) {
          e.target.childNodes[shuffleIndex].childNodes[activeWordChar].classList.add("correct");
        } else {
          e.target.childNodes[shuffleIndex].childNodes[activeWordChar].classList.add("incorrect");
        }

        setactiveWordChar(activeWordChar + 1);
        cursorRef.current.style.top = e.target.childNodes[shuffleIndex].childNodes[activeWordChar].getBoundingClientRect().top + 4 + "px";
        cursorRef.current.style.left = e.target.childNodes[shuffleIndex].childNodes[activeWordChar].getBoundingClientRect().right + "px";
      } else if (key === " ") {
        cursorRef.current.style.left = parseFloat(cursorRef.current.style.left) + 12 + "px";
        e.target.childNodes[shuffleIndex].classList.remove("active");
        setShuffleIndex(shuffleIndex + 1);
        setactiveWordChar(0);
      }
    }
  };

  return (
    <div className={styles["words"]} onKeyDown={handleKeyDown} ref={wordsRef} tabIndex={0}>
      {shuffle.map((w) => (
        <Word key={w} word={w} isActive={activeWord == w} />
      ))}
      <div className={styles["cursor"]} ref={cursorRef}></div>
    </div>
  );
};

export default WordsContainer;
