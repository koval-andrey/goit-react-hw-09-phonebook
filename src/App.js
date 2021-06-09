import { connect } from "react-redux";
//import { ToastContainer, toast } from "react-toastify";
//import Filter from "./Components/Filter";
//import Form from "./Components/Form";
import { Switch } from "react-router-dom";
import React, { Component } from "react";
//import contactsActions from "./redux/phonebook-action";
//import * as contactsOperations from './redux/phonebook-operations';
//import { getIsLoading } from './redux/phonebook-selector';
//import { deleteContact } from './redux/phonebook-selector';
import PrivateRoute from "./Components/PrivateRoute";
import PublicRoute from "./Components/PablicRoute";
import AppBar from "./Components/appBar";
import Contacts from "./view/ContactsView";
import Login from "./view/LoginView/LoginView";
import HomeView from "./view/HomeView/HomeView";
import Signup from "./view/SignupView/SignupView";
import authOperations from "./redux/auth/auth-operations";
//import ContactList from "./Components/ContactList";

//const HomeView = lazy(() =>
//  import('./view/HomeView/HomeView.jsx' /*webpackChunkName: 'home-page' */),
//);
//const Login = lazy(() =>
//  import('./view/LoginView/LoginView.jsx' /*webpackChunkName: 'Login' */),
//);
//const Signup = lazy(() =>
//  import('./view/SignupView/SignupView.jsx' /*webpackChunkName: 'Signup' */),
//);

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <>
        <AppBar />
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

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
