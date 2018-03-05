import React from "react";
import Nav from "../Navigation/Nav";
import styles from "./Catalog.scss";

export default class Catalog extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAuthors();
  }

  render() {
    return (
      <section className={styles.catalog}>
        <Nav />
        <div>
          <h1>Hello to a node-express exercise</h1>
        </div>
      </section>
    );
  }
}
