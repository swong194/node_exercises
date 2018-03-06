import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Nav.scss";

export default class Nav extends React.Component {
  render() {
    let linkNames = [];
    if (this.props.links) {
      linkNames = Object.keys(this.props.links);
    }
    const NavLinks = linkNames.map((link, idx) => {
      return (
        <NavLink key={idx} to={this.props.links[link]}>
          {link}
        </NavLink>
      );
    });

    return (
      <nav className={styles.nav}>
        <Link to="/" className={styles.nav__left}>
          <h1>Another Public Library</h1>
        </Link>
        <section className={styles.nav__right}>{NavLinks}</section>
      </nav>
    );
  }
}
