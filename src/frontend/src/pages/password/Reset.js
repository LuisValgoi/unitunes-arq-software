import React from "react";
import { Link } from "react-router-dom";

import "./Reset.css";
import logo from "../../assets/logo.png";

function Reset() {
  return (
    <div className="reset">
      <form className="form" method="post">
        <Link to="/">
          <img src={logo} className="logo" alt="logo" />
        </Link>
        <div className="container">
          <input type="email" placeholder="E-mail"></input>
          <button type="submit">Reset</button>
        </div>
        <div className="remember">
          <label>Lembrou de sua senha?</label>
          <label>
            <Link to="/login">
              <a href="#">Clique aqui</a>
            </Link>
          </label>
        </div>
      </form>
    </div>
  );
}

export default Reset;
