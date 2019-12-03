import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../Auth.css";
import logo from "../../../assets/logo.png";
import urls from "../../../services/urls";
import api from "../../../services/api";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function onSubmit(e) {
    e.preventDefault();

    await api.post(urls.LOGIN, {
      email,
      password
    }).catch(e => {
      throw new Error(e.response.data.message);
    });
  }

  return (
    <div className="page">
      <form className="form" onSubmit={onSubmit} method="post">
        <Link to="/">
          <img src={logo} className="logo" alt="logo" />
        </Link>
        <div className="container">
          <input type="email" name="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
          <input type="password" name="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} />
          <button type="submit">Entrar</button>
        </div>
        <div className="section-01">
          <label>Esqueceu sua senha?</label>
          <label>
            <Link to="/reset">Clique aqui</Link>
          </label>
        </div>
        <div className="section-02">
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
