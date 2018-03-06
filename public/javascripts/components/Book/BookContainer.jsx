import { connect } from "react-redux";
import Book from "./Book";
import { fetchBooks } from "../../actions/book_actions";

const mapStateToProps = state => {
  const books = Object.values(state.entities.books);
  return {
    books
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBooks: () => dispatch(fetchBooks())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Book);
