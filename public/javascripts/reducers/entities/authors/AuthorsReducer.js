import {
  RECEIVE_AUTHORS,
  RECEIVE_AUTHOR
} from "../../../actions/author_actions";

const AuthorsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_AUTHORS:
      return action.authors;
    default:
      return state;
  }
};

export default AuthorsReducer;
