import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import * as contactsOperations from "../../redux/phonebook-operations";

import styles from "./ContactList.module.css";

export default function ContactsItem({ id, name, number }) {
const dispatch = useDispatch();
const onDelete = id => {
  dispatch(contactsOperations.deleteContact(id));
};
return (
  <>
     <span>
        {name} : {number}
      </span>
      <button
        type="button"
        className={styles.close}
        onClick={() => onDelete(id)}
      >
        +
      </button>
    </>
);
}

ContactsItem.propTypes = {
name: PropTypes.string,
number: PropTypes.string.isRequired,
id: PropTypes.string.isRequired,
}; 




//= ({ name, number, id, onDelete }) => {
// return (
//    <>
//      <span>
//        {name} : {number}
//      </span>
//      <button
//        type="button"
//        className={styles.close}
//        onClick={() => onDelete(id)}
//      >
//        +
//      </button>
//    </>
//  );
//};

//ContactsItem.propTypes = {
// name: PropTypes.string,
//  number: PropTypes.string.isRequired,
// id: PropTypes.string.isRequired,
//};

//const mapDispatchToProps = (dispatch) => ({
//  onDelete: (id) => dispatch(contactsOperations.deleteContact(id)),
//});

//export default connect(null, mapDispatchToProps)(ContactsItem);
