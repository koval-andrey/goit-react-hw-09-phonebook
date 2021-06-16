import React from "react";
//mport PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Filter.module.css";
import * as actions from "../../redux/phonebook-action";
import { getFilter } from "../../redux/phonebook-selector";

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onInputChange = event => {
    return dispatch(actions.changeFilter(event.target.value));
  };

  return (
    <div className={styles.wrapper}>
    <label className={styles.label}>
      Search by Name
      <input
        className={styles.input}
        type="text"
        value={filter}
        onChange={onInputChange}
      />
    </label>
  </div>
  );
}

