import { useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { signUpRequest, loadTweets } from "../services/api";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [tweets, setTweets] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const isLogged = !!user;

  const signUp = async ({ username, avatar }) => {
    try {
      const res = await signUpRequest({ username, avatar });

      if (!res.data) return toast.error("Erro. Tente novamente!");

      setUser(res.data);
      toast.success("Bem-vindo!");
      loadTweets(toast, setTweets);
      return navigate("/");
    } catch (error) {
      return toast.error("Erro. Tente novamente!");
    }
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
