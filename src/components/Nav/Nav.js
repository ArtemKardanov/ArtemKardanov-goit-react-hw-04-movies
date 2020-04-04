import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

const activeStyle = {
  color: "red"
};

const Nav = () => (
  <nav className={styles.mainNav}>
    <ul className={styles.navList}>
      <li className={styles.navListItem}>
        <NavLink to="/" exact activeStyle={activeStyle}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/movies" activeStyle={activeStyle}>
          Movies
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
