// UserContext.js
import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const storedUserData = JSON.parse(localStorage.getItem('userData')) || null;
  const [user, setUser] = useState(storedUserData);
  const [loggedInUser, setLoggedInUser] = useState(null);
  
  const updateLoggedInUser = (userData) => {
    setLoggedInUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, loggedInUser, updateLoggedInUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
