import React from "react";
import { Link } from "react-router-dom";

import "../Auth.css";
import logo from "../../../assets/logo.png";

function Reset() {
  return (
    <div className="page">
      <form className="form" method="post">
        <Link to="/">
          <img src={logo} className="logo" alt="logo" />
        </Link>
        <div className="container">
          <input type="email" placeholder="E-mail"></input>
          <button type="submit">Reset</button>
        </div>
        <div className="section-02">
          <label>Lembrou de sua senha?</label>
          <label>
            <Link to="/login">Clique aqui</Link>
          </label>
        </div>
      </form>
    </div>
  );
}

export default Reset;
