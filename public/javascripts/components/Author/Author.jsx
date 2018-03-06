import React from "react";
import styles from "./Author.scss";
import Nav from "../Navigation/Nav";

export default class Author extends React.Component {
  componentDidMount() {
    this.props.fetchAuthors();
  }

  render() {
    const authors = this.props.authors.map(author => (
      <li key={author._id}>{author.first_name + " " + author.family_name}</li>
    ));
    const links = { books: "/books" };
    return (
      <section>
        <Nav links={links} />
        <ul>{authors}</ul>
      </section>
    );
  }
}
