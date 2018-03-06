import { combineReducers } from "redux";
import AuthorsReducer from "./authors/AuthorsReducer";
import BooksReducer from "./books/BooksReducer";

export default combineReducers({
  authors: AuthorsReducer,
  books: BooksReducer
});
