import axios from "axios";
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
} from "./phonebook-action";

axios.default.baseURL = "http://localhost:4040";

export const fetchContacts = () => (dispatch) => {
  dispatch(fetchContactsRequest());
  axios
    .get("/contacts")
    .then(({ data }) => dispatch(fetchContactsSuccess(data)))
    .catch((error) => dispatch(fetchContactsError(error)));
};

export const addContact =
  ({ name, number }) =>
  (dispatch) => {
    const contact = { name, number };
    dispatch(addContactRequest());
    axios
      .post("/contacts", contact)
      .then(({ data }) => dispatch(addContactSuccess(data)))
      .catch((error) => dispatch(addContactError(error)));
  };

export const deleteContact = (contactId) => (dispatch) => {
  dispatch(deleteContactsRequest());
  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactsSuccess(contactId)))
    .catch((error) => dispatch(deleteContactsError(error)));
};
