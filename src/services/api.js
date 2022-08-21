import axios from "axios";

export const api = axios.create({
  baseURL: "https://tweteroo-api.herokuapp.com",
});

export const loadTweets = async () => {
  const { data } = await api.get("/tweets");

  return data;
};

export const postTweet = async ({ username, twwet }) => {
  const { data } = await api.post("/tweets", { username, twwet });

  return data;
};

export const signUpRequest = async ({ username, avatar }) => {
  const { data } = await api.post("sign-up", { username, avatar });

  return data;
};
