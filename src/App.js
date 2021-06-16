import { Switch } from "react-router-dom";
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PrivateRoute from "./Components/PrivateRoute";
import PublicRoute from "./Components/PablicRoute";
import AppBar from "./Components/appBar";
import ContactsView from "./view/ContactsView";
import LoginView from "./view/LoginView/LoginView";
import HomeView from "./view/HomeView/HomeView";
import SignupView from "./view/SignupView/SignupView";
import authOperations from "./redux/auth/auth-operations";
import HamburgerMenu from "./Components/HamburgerMenu";


export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

    return (
      <>
        <AppBar />
        <HamburgerMenu />
        <Switch>
        <PublicRoute exact path="/">
        <HomeView />
        </PublicRoute>
        <PublicRoute path="/signup" restricted redirectTo="/phonebook">
          <SignupView/>
          </PublicRoute>
        <PublicRoute path="/login" restricted redirectTo="/phonebook">
          <LoginView />
        </PublicRoute>
        <PrivateRoute path="/phonebook" redirectTo="/login">
          <ContactsView />
        </PrivateRoute>
      </Switch>
    </>
  );
}