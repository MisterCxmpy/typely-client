import { useState, useEffect } from 'react';

const useGameTimer = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameTimer, setGameTimer] = useState(30);

  useEffect(() => {
    let intervalId;

    if (gameStarted) {
      intervalId = setInterval(() => {
        setGameTimer(prevSeconds => prevSeconds - 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [gameStarted]);

  useEffect(() => {
    if (gameTimer === 0) {
      resetTimer()
    }
  }, [gameTimer]);

  const startTimer = () => {
    setGameStarted(true);
  };

  const resetTimer = () => {
    setGameStarted(false);
    setGameTimer(30);
  };

  return { gameStarted, gameTimer, startTimer, resetTimer };
};

export default useGameTimer;