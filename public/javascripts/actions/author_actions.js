import AuthorAPIUtil from "../util/AuthorAPIUtil";
export const RECEIVE_AUTHORS = "RECEIVE_AUTHORS";
export const RECEIVE_AUTHOR = "RECEIVE_AUTHOR";

export const receiveAuthors = authors => {
  return {
    type: RECEIVE_AUTHORS,
    authors
  };
};

export const fetchAuthors = () => dispatch => {
  return AuthorAPIUtil.fetchAuthors().then(authors =>
    dispatch(receiveAuthors(authors))
  );
};
