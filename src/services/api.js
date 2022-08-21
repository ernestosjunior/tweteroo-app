import axios from "axios";

export const api = axios.create({
  baseURL: "https://tweteroo-api.herokuapp.com",
});
