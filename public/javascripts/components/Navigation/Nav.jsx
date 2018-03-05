import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.scss";

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
      <nav className={styles.nav}>
        <section>Another Public Library</section>
        <section>{NavLinks}</section>
      </nav>
    );
  }
}
