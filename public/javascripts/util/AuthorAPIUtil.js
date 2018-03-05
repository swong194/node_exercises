import axios from "axios";

export const fetchAuthors = () => {
  return axios.get("/api/authors");
};
