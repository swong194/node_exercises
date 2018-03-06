import { connect } from "react-redux";
import Catalog from "./Catalog";
import { fetchBooks } from "../../actions/book_actions";

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBooks: () => dispatch(fetchBooks())
  };
};

export default connect(mapStateToProps)(Catalog);
