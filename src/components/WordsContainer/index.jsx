import React, { useEffect, useRef, useState } from "react";
import Word from "../Word";
import styles from "./index.module.css"
import english from "../../../data/english";

const WordsContainer = () => {
  const wordsRef = useRef(null);
  const cursorRef = useRef(null);

  const [shuffle, setShuffle] = useState([]);
  const [shuffleIndex, setShuffleIndex] = useState(0);
  const [activeWord, setActiveWord] = useState("");
  const [activeWordChar, setactiveWordChar] = useState(0);

  function shuffleArray(array) {
    const newArray = [...array];
  
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
  
      const temp = newArray[i];
      newArray[i] = newArray[j];
      newArray[j] = temp;
    }
  
    return newArray;
  }

  useEffect(() => {
    setActiveWord(shuffle[shuffleIndex]);

    if (wordsRef.current) {
      wordsRef.current.focus();
    }
  }, [shuffleIndex, shuffle]);

  const handleKeyDown = (e) => {
    let key = e.key;

    const letterPattern = /^[A-Za-z]$/;

    cursorRef.current.style.animation = "none";

    if (key === "Backspace" && e.ctrlKey) {
      e.preventDefault()
      if (activeWordChar > 0) {
        for (let i = 0; i < activeWordChar; i++) {
          e.target.childNodes[shuffleIndex].childNodes[
            i
          ].classList.remove("correct", "incorrect");
        }
        setactiveWordChar(0);
        cursorRef.current.style.top =
          e.target.childNodes[shuffleIndex].childNodes[0].getBoundingClientRect()
            .top -
          wordsRef.current.getBoundingClientRect().top +
          6 +
          "px";
        cursorRef.current.style.left =
          e.target.childNodes[shuffleIndex].childNodes[0].getBoundingClientRect()
            .left -
          wordsRef.current.getBoundingClientRect().left +
          "px";
      }
    } else if (key == "Backspace") {
      if (activeWordChar > 0) {
        e.target.childNodes[shuffleIndex].childNodes[activeWordChar - 1].classList.remove("correct", "incorrect");
        setactiveWordChar(activeWordChar - 1);
        cursorRef.current.style.top =
          e.target.childNodes[shuffleIndex].childNodes[activeWordChar - 1].getBoundingClientRect().top - wordsRef.current.getBoundingClientRect().top + 6 + "px";
        cursorRef.current.style.left =
          e.target.childNodes[shuffleIndex].childNodes[activeWordChar - 1].getBoundingClientRect().left - wordsRef.current.getBoundingClientRect().left + "px"
      }
    } else {
      if (activeWordChar < activeWord.length && letterPattern.test(key)) {
        if (e.target.childNodes[shuffleIndex].childNodes[activeWordChar].getBoundingClientRect().top > 85) {
          // wordsRef.current.style.marginTop = "-40px";
        }

        if (key === activeWord[activeWordChar]) {
          e.target.childNodes[shuffleIndex].childNodes[activeWordChar].classList.add("correct");
        } else {
          e.target.childNodes[shuffleIndex].childNodes[activeWordChar].classList.add("incorrect");
        }

        setactiveWordChar(activeWordChar + 1);
        cursorRef.current.style.top = e.target.childNodes[shuffleIndex].childNodes[activeWordChar].getBoundingClientRect().top - wordsRef.current.getBoundingClientRect().top + 6 + "px";
        cursorRef.current.style.left = e.target.childNodes[shuffleIndex].childNodes[activeWordChar].getBoundingClientRect().right - wordsRef.current.getBoundingClientRect().left + "px";
      } else if (key === " ") {
        cursorRef.current.style.left = parseFloat(cursorRef.current.style.left) + 12 + "px";
        e.target.childNodes[shuffleIndex].classList.remove("active");
        setShuffleIndex(shuffleIndex + 1);
        setactiveWordChar(0);
      }
    }
  };

  useEffect(() => {
    const shuffled = shuffleArray(english.words);
    setShuffle(shuffled);
  }, []);

  return (
    <div className="typing-test">
      <div className={styles["words"]} onKeyDown={handleKeyDown} ref={wordsRef} tabIndex={0}>
          {shuffle.map((w) => (
            <Word key={w} word={w} isActive={activeWord == w} />
          ))}
        <div className={styles["cursor"]} ref={cursorRef}></div>
      </div>
    </div>
  );
};

export default WordsContainer;
