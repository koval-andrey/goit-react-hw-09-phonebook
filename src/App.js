import shortid from "shortid";
import { ToastContainer, toast } from "react-toastify";
import Filter from "./Components/Filter";
import ContactList from "./Components/ContactList";
import Form from "./Components/Form";
import { Component } from "react";
import { connect } from "react-redux";
import contactsActions from "./redux/phonebook-action";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const contactsParse = JSON.parse(contacts);
    if (contactsParse) {
      this.setState({ contacts: contactsParse });
    }
  }

  componentDidUpdate(prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  }

  addContact = (name, number) => {
    const { contacts } = this.state;
    if (name === "") {
      toast(`Пожалуйста введите имя`);
      return;
    }
    if (number === "") {
      toast(`Пожалуйста введите номер контакта`);
      return;
    }
    if (contacts.find((contact) => contact.name === name)) {
      toast(`${name} is already in contacts.`);
      return;
    }
    const newContact = { id: shortid.generate(), name, number };

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  changeFilter = ({ target }) => {
    this.setState({ filter: target.value });
  };
  getContacts = () => {
    const { filter, contacts } = this.state;
    const normFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normFilter)
    );
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };
  render() {
    const { filter } = this.state;
    const visibleContacts = this.getContacts();

    return (
      <>
        <h1>Phonebook</h1>
        <Form onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: ({ name, number }) =>
    dispatch(contactsActions.addContact({ name, number })),

  onChange: (event) =>
    dispatch(contactsActions.changeFilter(event.target.value)),

  onDeleteContact: (contactId) =>
    dispatch(contactsActions.deleteContact(contactId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
