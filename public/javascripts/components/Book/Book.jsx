import React from "react";
import styles from "./Book.scss";

export default class Book extends React.Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    return <section>Hello from Book</section>;
  }
}
