import { RECEIVE_BOOKS } from "../../../actions/book_actions";

const BookReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_BOOKS:
      return action.books;
    default:
      return state;
  }
};

export default BookReducer;
