import React from "react";
import PropTypes from "prop-types";

import styles from "./Container.module.css";

const Container = ({ title, children }) => (
  <section className={styles.section}>
    <h2 className={styles.heading}>{title}</h2>
    {children}
  </section>
);
Container.defaultProps = {
  title: "",
};

Container.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Container;
