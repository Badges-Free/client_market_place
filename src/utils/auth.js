import axios from "axios";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext("");
const token = localStorage.getItem("token");
export const useAuth = () => useContext(AuthContext);
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(token);

  const login = (user) => {
    localStorage.setItem("token", user);
    setUser(user);
  };

  const logout = async () => {
    setUser(null);
   localStorage.clear();
    
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
