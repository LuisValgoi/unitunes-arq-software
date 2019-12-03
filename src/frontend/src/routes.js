
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";
import Reset from "./pages/auth/password/Reset";

function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/reset" component={Reset} />
    </BrowserRouter>
  );
}

export default Routes;