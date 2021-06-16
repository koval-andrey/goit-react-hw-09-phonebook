import React from "react";
import { useSelector } from "react-redux";

import Navigation from "./Navigation";
import LoginMenu from "./login";
import UserMenu from "./UserMenu/UserMenu";
import authSelectors from "../redux/auth/auth-selectors";

import styles from "./appBar.module.css";

export default function AppBar(){
  const isAuthenticated = useSelector(authSelectors.isAuthenticated);
  return (
    <div className={styles.appBar}>
      <Navigation />
      {!isAuthenticated ? <LoginMenu /> : <UserMenu />}
    </div>
  );
}




//({ isAuthenticated }) => {
//  return (
//    <div className={styles.appBar}>
//      <Navigation />
//      {!isAuthenticated ? <LoginMenu /> : <UserMenu />}
//    </div>
//  );
//};

//const mapStateToProps = (state) => ({
//  isAuthenticated: authSelectors.isAuthenticated(state),
//});

//export default connect(mapStateToProps)(AppBar);
