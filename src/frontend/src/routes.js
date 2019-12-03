
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Reset from "./pages/password/Reset";

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