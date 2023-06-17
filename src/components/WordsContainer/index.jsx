import React from "react";
import Word from "../Word";

const WordsContainer = ({ wordsRef, cursorRef, shuffle, activeWord, handleKeyDown }) => {
  return (
    <div className="words" onKeyDown={handleKeyDown} ref={wordsRef} tabIndex={0}>
      {shuffle.map((w) => (
        <Word key={w} word={w} isActive={activeWord === w} />
      ))}
      <div className="cursor" ref={cursorRef}></div>
    </div>
  );
};

export default WordsContainer;
