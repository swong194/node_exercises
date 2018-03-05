import React from "react";
import { NavLink } from "react-router-dom";

export default class Nav extends React.Component {
  render() {
    let linkNames = [];
    if (this.props.links) {
      linkNames = Object.keys(this.props.links);
    }
    const NavLinks = linkNames.map(link => {
      return <NavLink to={this.props.links[link]}>{link}</NavLink>;
    });

    return (
      <nav>
        <section>Another Public Library</section>
        <section>{NavLinks}</section>
      </nav>
    );
  }
}
