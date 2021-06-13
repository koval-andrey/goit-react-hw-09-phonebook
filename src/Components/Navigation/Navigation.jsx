import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={styles.wrapper}>
      <NavLink
        className={styles.link}
        activeClassName={styles.link_active}
        exact
        to="/"
      >
        HOME
      </NavLink>
      <NavLink
        className={styles.link}
        activeClassName={styles.link_active}
        to="/phonebook"
      >
        PHONEBOOK
      </NavLink>
    </div>
  );
};

export default Navigation;
