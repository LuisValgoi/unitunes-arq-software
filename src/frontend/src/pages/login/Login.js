import React from "react";
import "./Login.css";
import logo from "../../assets/logo.png";

function Login() {
  return (
    <div className="login">
      <form className="form" method="post">
        <img src={logo} className="logo" alt="logo" />
        <div className="container">
          <input type="email" placeholder="E-mail"></input>
          <input type="password" placeholder="Senha"></input>
          <button type="submit">Entrar</button>
        </div>
        <div className="forgotPassword">
          <label>Esqueceu sua senha?</label>
          <label><a href="">Clique aqui</a></label>
        </div>
        <div className="register">
          <label>Ainda não possui conta?</label>
          <label><a href="">Registre-se</a></label>
        </div>
      </form>
    </div>
  );
}

export default Login;
