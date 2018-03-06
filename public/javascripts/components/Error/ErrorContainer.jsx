import { connect } from "react-redux";
import { removeErrors } from "../../actions/error_actions";
import Error from "./Error";

const mapStateToProps = state => {
  const errors = state.errors;
  return {
    errors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeErrors: () => dispatch(removeErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Error);
