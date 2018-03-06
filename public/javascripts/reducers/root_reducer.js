import { combineReducers } from "redux";
import EntitiesReducer from "./entities/EntitiesReducer";
import ErrorsReducer from "./errors/ErrorsReducer";

export default combineReducers({
  entities: EntitiesReducer,
  errors: ErrorsReducer
});
