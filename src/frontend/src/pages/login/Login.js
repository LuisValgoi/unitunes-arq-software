import React from "react";
import { Link } from "react-router-dom";

import "./Login.css";
import logo from "../../assets/logo.png";

function Login() {
  return (
    <div className="login">
      <form className="form" method="post">
        <Link to="/">
          <img src={logo} className="logo" alt="logo" />
        </Link>
        <div className="container">
          <input type="email" placeholder="E-mail"></input>
          <input type="password" placeholder="Senha"></input>
          <button type="submit">Entrar</button>
        </div>
        <div className="forgotPassword">
          <label>Esqueceu sua senha?</label>
          <label>
            <Link to="/reset">Clique aqui</Link>
          </label>
        </div>
        <div className="register">
          <label>Ainda não possui conta?</label>
          <label>
            <Link to="/register">Clique aqui</Link>
          </label>
        </div>
      </form>
    </div>
  );
}

export default Login;
