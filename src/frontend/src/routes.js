
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./components/home/Home";
import Login from "./components/auth/login/Login";
import Register from "./components/auth/register/Register";
import Reset from "./components/auth/password/Reset";
import ErrorBoundary from "./components/ErrorBoundary";

function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <ErrorBoundary>
          <Home title="Home" />
        </ErrorBoundary>
      </Route>

      <Route exact path="/login">
        <ErrorBoundary>
          <Login title="Login" />
        </ErrorBoundary>
      </Route>

      <Route exact path="/register">
        <ErrorBoundary>
          <Register title="Register" />
        </ErrorBoundary>
      </Route>

      <Route exact path="/reset">
        <ErrorBoundary>
          <Reset title="Reset" />
        </ErrorBoundary>
      </Route>

    </BrowserRouter >
  );
}

export default Routes;