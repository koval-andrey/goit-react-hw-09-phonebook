import { connect } from 'react-redux';
import { ToastContainer, toast } from "react-toastify";
import Filter from "./Components/Filter";
import Form from "./Components/Form";
import { Switch } from 'react-router-dom';
import React, { Component, Suspense, lazy } from "react";
//import contactsActions from "./redux/phonebook-action";
import * as contactsOperations from './redux/phonebook-operations';
import { getIsLoading } from './redux/phonebook-selector';
import { deleteContact } from './redux/phonebook-selector';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from "./Components/PablicRoute";
import AppBar from "./Components/appBar.js" 
import ContactList from "./Components/ContactList"

const HomeView = lazy(() =>
  import('./view/HomeView/HomeView.jsx' /*webpackChunkName: 'home-page' */),
);
const Login = lazy(() =>
  import('./view/LoginView/LoginView.jsx' /*webpackChunkName: 'Login' */),
);
const Signup = lazy(() =>
  import('./view/SignupView/SignupView.jsx' /*webpackChunkName: 'Signup' */),
);

class App extends Component {


  componentDidMount() {
    
    this.props.onGetCurrentUser()
  }
  


 // addContact = (name, number) => {
 //   const { contacts } = this.state;
 //   if (name === "") {
 //     toast(`Пожалуйста введите имя`);
 //     return;
 //   }
 //   if (number === "") {
 //     toast(`Пожалуйста введите номер контакта`);
 //     return;
 //   }
 //   if (contacts.find((contact) => contact.name === name)) {
 //     toast(`${name} is already in contacts.`);
 //     return;
 //   }
 //   const newContact = { id: shortid.generate(), name, number };

  //  this.setState(({ contacts }) => ({
 //     contacts: [newContact, ...contacts],
  //  }));
 // };

  //changeFilter = ({ target }) => {
  //  this.setState({ filter: target.value });
  //};
  //getContacts = () => {
  //  const { filter, contacts } = this.state;
  //  const normFilter = filter.toLowerCase();
  //  return contacts.filter((contact) =>
  //    contact.name.toLowerCase().includes(normFilter)
  //  );
  //};

  //deleteContact = (contactId) => {
  //  this.setState((prevState) => ({
  //    contacts: prevState.contacts.filter(
  //      (contact) => contact.id !== contactId
  //    ),
  //  }));
 // };
  render() {
    //const { filter } = this.state;
    const visibleContacts = this.getContacts();

    return (
      <>
        <AppBar/>
        <Switch>
          <PublicRoute exact path="/" component={HomeView} />
          <PublicRoute
            path="/signup"
            restricted
            redirectTo="/phonebook"
            component={Signup}
          />
          <PublicRoute
            path="/login"
            restricted
            redirectTo="/phonebook"
            component={Login}
          />
          <PrivateRoute
            path="/phonebook"
            redirectTo="/login"
            component={Contacts}
          />
        </Switch>
      </>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingContacts: getIsLoading(state),
  //value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
  onDelete: contactId => dispatch(contactsOperations.deleteContact(contactId)),
  //  dispatch(contactsActions.addContact({ name, number })),

  //onChange: (event) =>
  // dispatch(contactsActions.changeFilter(event.target.value)),

//onDeleteContact: (contactId) => dispatch(contactsActions.deleteContact(contactId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
