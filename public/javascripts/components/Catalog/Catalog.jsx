import React from "react";
import Nav from "../Navigation/Nav";
import styles from "./Catalog.scss";

export default class Catalog extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAuthors();
    this.props.fetchBooks();
  }

  render() {
    const links = { authors: "/authors", books: "/books" };
    return (
      <section className={styles.catalog}>
        <Nav links={links} />
        <div>
          <h1>Hello to a node-express exercise</h1>
        </div>
      </section>
    );
  }
}
