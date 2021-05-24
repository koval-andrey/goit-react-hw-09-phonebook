import { createAction } from "@reduxjs/toolkit";
import shortid from "shortid";
//import types from "./phonebook-types";

const addContact = createAction("contacts/Add_contact", (name, number) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));
const deleteContact = createAction("contacts/delete_contact");
const changeFilter = createAction("contacts/change_filter");

const contactsActions = { addContact, deleteContact, changeFilter };

export default contactsActions;
