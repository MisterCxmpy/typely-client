import React from "react";

const Word = ({ word, isActive }) => {
  return (
    <div className={`word ${isActive ? "active" : ""}`}>
      {word.split("").map((l, i) => (
        <span className="letter" key={i}>
          {l}
        </span>
      ))}
    </div>
  );
};

export default Word;