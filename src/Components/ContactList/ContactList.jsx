import React from "react";
import { connect } from "react-redux";
import { getVisibleContacts } from "../../redux/phonebook-selector";
import styles from "./ContactList.module.css";
import ContactsItem from "./ContactsItem";

const ContactList = ({ contacts }) => {
  return (
    <>
      {contacts && (
        <ul className={styles.list}>
          {contacts.map((contact) => (
            <li className={styles.item} key={contact.id}>
              <ContactsItem {...contact} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    contacts: getVisibleContacts(state),
  };
};

export default connect(mapStateToProps)(ContactList);
