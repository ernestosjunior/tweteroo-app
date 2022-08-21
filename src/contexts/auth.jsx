import { useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { signUpRequest, loadTweets, postTweet } from "../services/api";

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

  const newTweet = async ({ tweet }) => {
    try {
      const res = await postTweet({ tweet, username: user.username });

      if (!res.data) return toast.error("Erro. Tente novamente!");

      setUser(res.data);
      toast.success("Sucesso!");
      return loadTweets(toast, setTweets);
    } catch (error) {
      return toast.error("Erro. Tente novamente!");
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLogged, signUp, newTweet, tweets }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const { user, isLogged, signUp, newTweet, tweets } = useContext(AuthContext);

  return {
    user,
    isLogged,
    signUp,
    newTweet,
    tweets,
  };
};
