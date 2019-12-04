import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../Auth.css";
import "./Reset.css";
import logo from "../../../assets/logo.png";
import urls from "../../../services/urls";
import api from "../../../services/api";

function Reset() {
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();

    setIsLoading(true);

    await api.post(urls.RESET, {
      email
    }).then(() => {
      setEmailSent(true);
      setError(false);
      setErrorMsg('');
    }).catch(e => {
      setEmailSent(false);
      setError(true);
      setErrorMsg(e.response.data.message);
    }).finally(e => {
      setIsLoading(false);
    });
  }

  function onChangeEmail(value) {
    setEmail(value);
    setEmailSent(false);
    setError(false);
    setErrorMsg('');
  }

  let sucessHTML = (
    <div className="section-02">
      <label className="success">O usuário recebeu um e-mail com a nova senha.</label>
      <label>
        <Link to="/login">Faça Login</Link>
      </label>
    </div>
  );

  let defaultHTML = (
    <div className="section-02">
      <label>Lembrou de sua senha?</label>
      <label>
        <Link to="/login">Faça Login</Link>
      </label>
    </div>
  );

  let errorHTML = (
    <div className="section-02 error">
      <label className="error">{errorMsg}</label>
      <label>
        <Link to="/login">Voltar</Link>
      </label>
    </div>
  );

  let block = defaultHTML;
  if (error) {
    block = errorHTML;
  } else if (emailSent) {
    block = sucessHTML;
  }

  return (
    <div className="page">
      <form className="form" onSubmit={onSubmit} method="post">
        <Link to="/">
          <img src={logo} className="logo" alt="logo" />
        </Link>
        <div className="container">
          <input type="email" name="email" required={true} placeholder="E-mail" value={email} onChange={e => onChangeEmail(e.target.value)} />
          <button type="submit" className={isLoading ? 'button is-link is-loading' : ''}>Reset</button>
        </div>
        {block}
      </form>
    </div>
  );
}

export default Reset;
