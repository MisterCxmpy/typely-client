import React, { useState, useContext, createContext, useEffect } from 'react';

const TypingConfigContext = createContext();

export const TypingConfigProvider = ({ children }) => {
  const [config, setConfig] = useState({});

  const times = [15, 30, 60, 120];

  const [timer, setTimer] = useState(() => {
    const cachedConfig = localStorage.getItem('config');
    if (cachedConfig) {
      const parsedConfig = JSON.parse(cachedConfig);
      return parsedConfig.timer;
    }
    return 30;
  });

  const saveConfig = (newConfig) => {
    const updatedConfig = { ...config, ...newConfig };
    setConfig(updatedConfig);
    localStorage.setItem('config', JSON.stringify(updatedConfig));
  };

  useEffect(() => {
    const cachedConfig = localStorage.getItem('config');
    if (cachedConfig) {
      const parsedConfig = JSON.parse(cachedConfig);
      setConfig(parsedConfig);
    }
  }, []);

  useEffect(() => {
    saveConfig({ timer }); // Save the updated timer value to the config
  }, [timer]);

  return (
    <TypingConfigContext.Provider value={{ timer, setTimer, times, saveConfig }}>
      {children}
    </TypingConfigContext.Provider>
  );
};

export const useTypingConfig = () => useContext(TypingConfigContext);
