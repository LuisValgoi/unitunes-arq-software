
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
      <ErrorBoundary>
        <Route exact path="/" component={Home} />
      </ErrorBoundary>

      <ErrorBoundary>
        <Route exact path="/login" component={Login} />
      </ErrorBoundary>

      <ErrorBoundary>
        <Route exact path="/register" component={Register} />
      </ErrorBoundary>

      <ErrorBoundary>
        <Route exact path="/reset" component={Reset} />
      </ErrorBoundary>
    </BrowserRouter >
  );
}

export default Routes;