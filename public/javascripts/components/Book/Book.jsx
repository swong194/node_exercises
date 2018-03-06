import React from "react";
import styles from "./Book.scss";

export default class Book extends React.Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const books = this.props.books.map(book => (
      <li key={book._id}>{book.title}</li>
    ));
    return (
      <section>
        <ul>{books}</ul>
      </section>
    );
  }
}
