import { connect } from "react-redux";
import Author from "./Author";
import { fetchAuthors } from "../../actions/author_actions";

const mapStateToProps = state => {
  const authors = Object.values(state.entities.authors);
  return {
    authors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAuthors: () => dispatch(fetchAuthors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Author);
