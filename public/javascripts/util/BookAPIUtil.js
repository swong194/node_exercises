import axios from "axios";

export const fetchBooks = () => {
  return axios.get("/api/books");
};
