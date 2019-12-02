import React from "react";
import "./Login.css";
import logo from "../../assets/logo.svg";

function Login() {
  return (
    <div className="login">
      <form className="form" method="post">
        <img src={logo} className="logo" alt="logo" />
        <h1 className="title">Entre na sua Conta</h1>
        <div className="container">
          <input type="email" placeholder="E-mail"></input>
          <input type="password" placeholder="Senha"></input>
          <button type="submit">Entrar</button>
          <label>Esqueceu sua senha?</label>
        </div>
      </form>
    </div>
  );
}

export default Login;
