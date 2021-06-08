import PropTypes from "prop-types";
import { connect } from "react-redux";

import * as contactsOperations from "../../redux/phonebook-operations";

import styles from "./ContactList.module.css";

const ContactsItem = ({ name, number, id, onDelete }) => {
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
};

ContactsItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onDelete: (id) => dispatch(contactsOperations.deleteContact(id)),
});

export default connect(null, mapDispatchToProps)(ContactsItem);
