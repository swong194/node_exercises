import React from "react";
import Nav from "../Navigation/Nav";

export default class Catalog extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAuthors();
  }

  render() {
    return (
      <section>
        <Nav />
        <div>
          <h1>Hello to a node-express exercise</h1>
        </div>
      </section>
    );
  }
}
