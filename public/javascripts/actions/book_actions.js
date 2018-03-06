import * as BookAPIUtil from "../util/BookAPIUtil";
import { receiveErrors } from "./error_actions";

export const RECEIVE_BOOKS = "RECEIVE_BOOKS";

export const receiveBooks = books => {
  return {
    type: RECEIVE_BOOKS,
    books
  };
};

export const fetchBooks = () => dispatch => {
  return BookAPIUtil.fetchBooks().then(
    books => dispatch(receiveBooks(books)),
    errors => dispatch(receiveErrors(errors))
  );
};
