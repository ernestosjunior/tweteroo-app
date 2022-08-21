import axios from "axios";

export const api = axios.create({
  baseURL: "https://tweteroo-api.herokuapp.com",
});

export const loadTweets = async (toast, setTweets) => {
  const res = await api.get("/tweets");

  if (!res.data) return toast.error("Erro ao carregas os tweets.");

  setTweets(res.data);

  return res;
};

export const postTweet = async ({ username, twwet }) => {
  const res = await api.post("/tweets", { username, twwet });

  return res;
};

export const signUpRequest = async ({ username, avatar }) => {
  const res = await api.post("sign-up", { username, avatar });

  return res;
};
