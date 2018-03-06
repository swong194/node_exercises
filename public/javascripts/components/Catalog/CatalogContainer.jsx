import { connect } from "react-redux";
import Catalog from "./Catalog";
import { fetchAuthors } from "../../actions/author_actions";
import { fetchBooks } from "../../actions/book_actions";

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAuthors: () => dispatch(fetchAuthors()),
    fetchBooks: () => dispatch(fetchBooks())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
