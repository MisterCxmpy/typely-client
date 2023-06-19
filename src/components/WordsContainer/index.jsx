import React, { useEffect, useRef, useState } from "react";
import Word from "../Word";
import styles from "./index.module.css"
import english from "../../../data/english";

const WordsContainer = () => {
  const wordsRef = useRef(null);
  const cursorRef = useRef(null);

  const [gameStarted, setGameStarted] = useState(false)
  const [gameTimer, setGameTimer] = useState(30)

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

  const handleCtrlBackspace = () => {
    const activeWordNode = wordsRef.current.childNodes[shuffleIndex];

    if (activeWordChar > 0) {
      for (let i = 0; i < activeWordChar; i++) {
        activeWordNode.childNodes[i].classList.remove("correct", "incorrect");
      }
      setactiveWordChar(0);
      const firstCharNode = activeWordNode.childNodes[0];
      cursorRef.current.style.top =
        firstCharNode.getBoundingClientRect().top -
        wordsRef.current.getBoundingClientRect().top +
        6 +
        "px";
      cursorRef.current.style.left =
        firstCharNode.getBoundingClientRect().left -
        wordsRef.current.getBoundingClientRect().left +
        "px";
    }
  }

  const handleBackspaceKey = () => {
    const activeWordNode = wordsRef.current.childNodes[shuffleIndex];

    if (activeWordChar > 0) {
      activeWordNode.childNodes[activeWordChar - 1].classList.remove("correct", "incorrect");
      setactiveWordChar(activeWordChar - 1);
      cursorRef.current.style.top =
      activeWordNode.childNodes[activeWordChar - 1].getBoundingClientRect().top - wordsRef.current.getBoundingClientRect().top + 6 + "px";
      cursorRef.current.style.left =
      activeWordNode.childNodes[activeWordChar - 1].getBoundingClientRect().left - wordsRef.current.getBoundingClientRect().left + "px"
    }
  };
  
  const handleOtherKey = (key) => {
    const activeWordNode = wordsRef.current.childNodes[shuffleIndex];
    const letterPattern = /^[A-Za-z]$/;
    setGameStarted(true)

    if (activeWordChar < activeWord.length && letterPattern.test(key)) {
      const charNode = activeWordNode.childNodes[activeWordChar];
      console.log(charNode.getBoundingClientRect().top - wordsRef.current.getBoundingClientRect().top);
      if (charNode.getBoundingClientRect().top - wordsRef.current.getBoundingClientRect().top > 77) {
        wordsRef.current.style.marginTop = "-40px";
      }
  
      if (key === activeWord[activeWordChar]) {
        charNode.classList.add("correct");
      } else {
        charNode.classList.add("incorrect");
      }
  
      setactiveWordChar(activeWordChar + 1);
      cursorRef.current.style.top =
        charNode.getBoundingClientRect().top -
        wordsRef.current.getBoundingClientRect().top +
        6 +
        "px";
      cursorRef.current.style.left =
        charNode.getBoundingClientRect().right -
        wordsRef.current.getBoundingClientRect().left +
        "px";
    } else if (key === " ") {
      const nextWordNode = wordsRef.current.childNodes[shuffleIndex + 1].childNodes[0];
      cursorRef.current.style.top =
        nextWordNode.getBoundingClientRect().top -
        wordsRef.current.getBoundingClientRect().top +
        6 +
        "px";
      cursorRef.current.style.left =
        nextWordNode.getBoundingClientRect().left -
        wordsRef.current.getBoundingClientRect().left +
        "px";
      activeWordNode.classList.remove("active");
      setShuffleIndex(shuffleIndex + 1);
      setactiveWordChar(0);
    }
  };
  
  const handleKeyDown = (e) => {
    const key = e.key;
    cursorRef.current.style.animation = "none";

    if (key === "Backspace" && e.ctrlKey) {
      e.preventDefault();
      handleCtrlBackspace();
    } else if (key === "Backspace") {
      handleBackspaceKey();
    } else {
      handleOtherKey(key);
    }
  };

  useEffect(() => {
    const shuffled = shuffleArray(english.words);
    setShuffle(shuffled);
  }, []);

  return (
    <div className={styles["typing-test"]}>
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
