import { connect } from "react-redux";
import Catalog from "./Catalog";
import { fetchAuthors } from "../../actions/author_actions.js";

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAuthors: () => dispatch(fetchAuthors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
