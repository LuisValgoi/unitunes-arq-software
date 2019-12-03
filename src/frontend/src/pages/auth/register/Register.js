import React from "react";
import { Link } from "react-router-dom";

import "../Auth.css";
import "./Register.css";
import logo from "../../../assets/logo.png";

function Register() {
  return (
    <div className="page">
      <form className="form" method="post">
        <Link to="/">
          <img src={logo} className="logo" alt="logo" />
        </Link>
        <div className="container">
          <input type="text" className="splitLeft" placeholder="Primeiro Nome"></input>
          <input type="text" className="splitRight" placeholder="Último Nome"></input>
          <input type="email" placeholder="E-mail"></input>
          <input type="password" placeholder="Senha"></input>
          <input type="password" placeholder="Confirme sua senha"></input>
          <button type="submit">Registrar</button>
        </div>
        <div className="section-02">
          <label>Já possui conta?</label>
          <label>
            <Link to="/login">Clique aqui</Link>
          </label>
        </div>
      </form>
    </div>
  );
}

export default Register;
