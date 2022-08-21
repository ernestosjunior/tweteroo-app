import { useState, createContext, useContext } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const isLogged = !!user;

  const signUp = () => {};

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
