import React from "react";
import Nav from "../Navigation/Nav";
import styles from "./Catalog.scss";

export default class Catalog extends React.Component {
  render() {
    const links = { authors: "/authors", books: "/books" };
    return (
      <section>
        <Nav links={links} />
        <div className={styles.catalog}>
          <h1>Hello to a node-express exercise</h1>
        </div>
      </section>
    );
  }
}
