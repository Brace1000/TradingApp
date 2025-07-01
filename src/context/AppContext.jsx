import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [activeSymbol, setActiveSymbol] = useState('BINANCE:BTCUSDT'); // Default to BTC

  const value = {
    activeSymbol,
    setActiveSymbol,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => useContext(AppContext);