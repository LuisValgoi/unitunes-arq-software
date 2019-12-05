import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

import "../Auth.css";
import logo from "../../../assets/logo.png";
import urls from "../../../services/urls";
import api from "../../../services/api";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();

    setIsLoading(true);

    await api.post(urls.LOGIN, {
      email,
      password
    }).then(handleSuccess.bind(this))
      .catch(handleError.bind(this))
      .finally(handleAlways.bind(this));
  }

  function handleSuccess(response) {
    setError(false);
    setErrorMsg('');
    setIsLoggedIn(true);
    setToken(response.data.token);
  }

  function handleError(e) {
    setError(true);
    setErrorMsg(e.response.data.message);
    setIsLoggedIn(false);
    setToken('');
  }

  function handleAlways() {
    setIsLoading(false);
  }

  function onChangeEmail(value) {
    setError(false);
    setErrorMsg('');
    setEmail(value);
  }

  let defaulHTML = (
    <div className="section-02">
      <label>Ainda não possui conta?</label>
      <label>
        <Link to="/register">Clique aqui</Link>
      </label>
    </div>
  );

  let errorHTML = (
    <div className="section-02">
      <label className="error">{errorMsg}</label>
    </div>
  );

  let sucessHTML = (
    <div className="section-02">
      <label className="success">Você será redirecionado...</label>
    </div>
  );

  let block = defaulHTML;
  if (error) {
    block = errorHTML;
  } else if (token !== '') {
    block = sucessHTML;
  }

  return (
    <div className="page">
      {isLoggedIn ? <Redirect to="/" /> :
        <form className="form" onSubmit={onSubmit} method="post">
          <Link to="/">
            <img src={logo} className="logo" alt="logo" />
          </Link>
          <div className="container">
            <input type="email" name="email" placeholder="E-mail" required value={email} onChange={e => onChangeEmail(e.target.value)} />
            <input type="password" name="password" placeholder="Senha" required value={password} onChange={e => setPassword(e.target.value)} />
            <button type="submit" className={isLoading ? 'button is-link is-loading' : ''}>Entrar</button>
          </div>
          <div className="section-01">
            <label>Esqueceu sua senha?</label>
            <label>
              <Link to="/reset">Clique aqui</Link>
            </label>
          </div>
          {block}
        </form>
      }
    </div>
  );
}

export default Login;
