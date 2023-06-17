// App.js
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
  const [shuffle, setShuffle] = useState([]);

  useEffect(() => {
    const shuffled = shuffleArray(english.words);
    setShuffle(shuffled);
  }, []);

  return (
    <div className="container">
      <WordsContainer shuffle={shuffle} />
    </div>
  );
}

export default App;
