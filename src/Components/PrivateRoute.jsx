import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React from "react";

import authSelectors from '../redux/auth/auth-selectors';

export default function PrivateRoute({
  isAuthenticated,
  redirectTo,
  children,
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.isAuthenticated);
  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}
