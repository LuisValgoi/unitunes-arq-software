import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

import "../Auth.css";
import logo from "../../../assets/logo.png";
import urls from "../../../services/urls";
import api from "../../../services/api";

function Login() {
  const [logged, setLogged] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(_getDefaultErrorValues());
  const [form, setForm] = useState(_getDefaultFormValues());

  // get defaults
  function _getDefaultErrorValues() {
    return {
      hasOccured: false,
      msg: ''
    };
  }

  function _getDefaultFormValues() {
    return {
      email: '',
      password: ''
    };
  }

  // handlers
  function _handleSuccess(response) {
    setError(_getDefaultErrorValues());
    setLoading(false);
    setLogged(true);
    console.log(response);
  }

  function _handleError(e) {
    setError({
      hasOccured: true,
      msg: e.response.data.message
    });
    setLoading(false);
    setLogged(false);
  }

  // events
  function onFormChange(e) {
    let { name, value } = e.target;
    form[name] = value;
    setForm({ ...form });
    setError(_getDefaultErrorValues());
  }

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);

    await api.post(urls.LOGIN, form)
      .then(_handleSuccess.bind(this))
      .catch(_handleError.bind(this));
  }

  // render
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
      <label className="error">{error.msg}</label>
    </div>
  );

  let sucessHTML = (
    <div className="section-02">
      <label className="success">Você será redirecionado...</label>
    </div>
  );

  let block = defaulHTML;
  if (error.hasOccured) {
    block = errorHTML;
  } else if (logged) {
    block = sucessHTML;
  }

  return (
    <div className="page">
      {logged ? <Redirect to="/" /> :
        <form className="form" onSubmit={onSubmit} method="post">
          <Link to="/">
            <img src={logo} className="logo" alt="logo" />
          </Link>
          <div className="container">
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              required
              value={form.email}
              onChange={onFormChange} />
            <input
              type="password"
              name="password"
              placeholder="Senha"
              required
              value={form.password}
              onChange={onFormChange} />
            <button
              type="submit"
              className={loading ? 'button is-link is-loading' : ''}>Entrar
            </button>
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
