import { connect } from "react-redux";
import { Switch } from "react-router-dom";
import React, { Component } from "react";
import PrivateRoute from "./Components/PrivateRoute";
import PublicRoute from "./Components/PablicRoute";
import AppBar from "./Components/appBar";
import ContactsView from "./view/ContactsView";
import LoginView from "./view/LoginView/LoginView";
import HomeView from "./view/HomeView/HomeView";
import SignupView from "./view/SignupView/SignupView";
import authOperations from "./redux/auth/auth-operations";
import HamburgerMenu from "./Components/HamburgerMenu";


class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <>
        <AppBar />
        <HamburgerMenu />
        <Switch>
          <PublicRoute exact path="/" component={HomeView} />
          <PublicRoute
            path="/signup"
            restricted
            redirectTo="/phonebook"
            component={SignupView}
          />
          <PublicRoute
            path="/login"
            restricted
            redirectTo="/phonebook"
            component={LoginView}
          />
          <PrivateRoute
            path="/phonebook"
            redirectTo="/login"
            component={ContactsView}
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
