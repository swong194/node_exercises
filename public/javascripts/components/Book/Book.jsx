import React from "react";
import styles from "./Book.scss";
import Nav from "../Navigation/Nav";

export default class Book extends React.Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const books = this.props.books.map(book => (
      <li key={book._id}>{book.title}</li>
    ));
    const links = { authors: "/authors" };
    return (
      <section>
        <Nav links={links} />
        <ul>{books}</ul>
      </section>
    );
  }
}
