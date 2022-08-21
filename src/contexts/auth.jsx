import { useState, createContext, useContext } from "react";
import { signUpRequest } from "../services/api";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const isLogged = !!user;

  const signUp = async ({ username, avatar }) => {
    const data = await signUpRequest({ username, avatar });
  };

  return (
    <AuthContext.Provider value={{ user, isLogged, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const { user, isLogged, signUp } = useContext(AuthContext);

  return {
    user,
    isLogged,
    signUp,
  };
};
