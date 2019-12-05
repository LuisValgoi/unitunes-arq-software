
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
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/reset" component={Reset} />
      </ErrorBoundary>
    </BrowserRouter >
  );
}

export default Routes;