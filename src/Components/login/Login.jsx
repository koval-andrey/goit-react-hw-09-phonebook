import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Login.module.css";

const LoginMenu = () => {
  return (
    <div className={styles.wrapper}>
      <NavLink
        className={styles.link}
        activeClassName={styles.link_active}
        to="/signup"
      >
        SIGNUP
      </NavLink>
      <NavLink
        className={styles.link}
        activeClassName={styles.link_active}
        to="/login"
      >
        LOGIN
      </NavLink>
    </div>
  );
};

export default LoginMenu;
