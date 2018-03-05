import { combineReducers } from "redux";
import AuthorsReducer from "./authors/AuthorsReducer";

export default combineReducers({
  authors: AuthorsReducer
});
