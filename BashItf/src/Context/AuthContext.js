import React, { createContext, useContext, useState } from 'react';
import SetCookie from '../hooks/SetCookie';
import GetCookie from '../hooks/GetCookie';
import RemoveCookie from '../hooks/RemoveCookie';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(GetCookie('isLoggedIn') === 'true');

  const login = () => {
    setIsLoggedIn(true);
    SetCookie('isLoggedIn', true);
  };

  const logout = () => {
    setIsLoggedIn(false);
    RemoveCookie('isLoggedIn');
  };

  const contextValue = {
    isLoggedIn,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
