import "./App.css";
import english from "../data/english";
import { useEffect, useRef, useState } from "react";
import { WordsContainer } from "./components";

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

function App() {
  const wordsRef = useRef(null);
  const cursorRef = useRef(null);

  const [shuffle, setShuffle] = useState([]);
  const [shuffleIndex, setShuffleIndex] = useState(0);
  const [activeWord, setActiveWord] = useState("");
  const [activeWordChar, setactiveWordChar] = useState(0);

  useEffect(() => {
    const shuffled = shuffleArray(english.words);

    setShuffle(shuffled);
    setActiveWord(shuffled[shuffleIndex]);

    if (wordsRef.current) {
      wordsRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (shuffle.length > 0) {
      setActiveWord(shuffle[shuffleIndex]);
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

        console.log(e.target.childNodes[shuffleIndex].childNodes[activeWordChar].getBoundingClientRect().top);

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
    <div className="container">
      <WordsContainer
        wordsRef={wordsRef}
        cursorRef={cursorRef}
        shuffle={shuffle}
        activeWord={activeWord}
        handleKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default App;