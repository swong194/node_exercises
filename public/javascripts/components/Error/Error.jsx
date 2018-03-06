import React from "react";
import style from "./Error.scss";

export default class Error extends React.Component {
  render() {
    const errors = this.props.errors.map((error, idx) => (
      <span key={idx}>{error}</span>
    ));
    return <section className={style.error}>{errors}</section>;
  }
}
