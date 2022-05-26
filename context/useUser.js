import React, { createContext, useContext, useState, useEffect } from 'react';

const userContext = createContext();

export const useUser = () => {
  return useContext(userContext)
}

export function ProvideUser({ children }) {
  const userData = useProvideUser();

  return (
    <userContext.Provider value={userData}>
      {children}
    </userContext.Provider>
  );
}

const useProvideUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => setUser(localStorage.getItem('token')), [])

  const login = (token) => {
    setUser(token)
    localStorage.setItem('token', token);
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('token');
  }

  return {
    user,
    login,
    logout
  }
}
