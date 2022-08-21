import { useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { signUpRequest } from "../services/api";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const isLogged = !!user;

  const signUp = async ({ username, avatar }) => {
    const data = await signUpRequest({ username, avatar });

    if (!data || !data.id) return toast.error("Credenciais inválidas!");

    setUser(data);
    toast.success("Bem-vindo!");
    return navigate("/");
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
