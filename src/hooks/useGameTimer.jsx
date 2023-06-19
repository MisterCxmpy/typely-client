import { useState, useEffect } from 'react';
import { useTypingConfig } from '../contexts/TypingConfigContext';

const useGameTimer = () => {
  const { timer } = useTypingConfig()

  
  const [gameStarted, setGameStarted] = useState(false);
  const [gameTimer, setGameTimer] = useState(timer);
  
  useEffect(() => {
    setGameTimer(timer)
  }, [timer])

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
    setGameTimer(timer);
  };

  return { gameStarted, gameTimer, startTimer, resetTimer };
};

export default useGameTimer;