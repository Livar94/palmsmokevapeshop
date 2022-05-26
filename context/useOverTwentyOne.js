import React, { createContext, useContext, useState } from 'react';

const over21Context = createContext();

export const useOverTwentyOne = () => {
  return useContext(over21Context)
}

export function ProvideOverTwentyOne({ children }) {
  const over21Data = useProvideOverTwentyOne();

  return (
    <over21Context.Provider value={over21Data}>
      {children}
    </over21Context.Provider>
  );
}

const useProvideOverTwentyOne = () => {
  const [twentyOne, setTwentyOne] = useState(null);

  return {
    twentyOne
  }
}
