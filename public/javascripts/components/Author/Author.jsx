import React from "react";
import styles from "./Author.scss";

export default class Author extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAuthors();
  }

  render() {
    const authors = this.props.authors.map(author => (
      <li key={author._id}>{author.first_name + " " + author.family_name}</li>
    ));
    return (
      <section>
        <ul>{authors}</ul>
      </section>
    );
  }
}
