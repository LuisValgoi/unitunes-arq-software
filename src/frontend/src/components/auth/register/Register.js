import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../Auth.css";
import "./Register.css";
import logo from "../../../assets/logo.png";
import urls from "../../../services/urls";
import api from "../../../services/api";

function Register() {
  const [form, setForm] = useState(getDefaultFormValues());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(getDefaultErrorValues());

  function getDefaultErrorValues() {
    return {
      hasOccured: false,
      msg: ''
    };
  }

  function getDefaultFormValues() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    };
  }

  function handleSuccess(response) {
    setError(getDefaultErrorValues());
    console.log(response);
  }

  function handleError(e) {
    setError({
      hasOccured: true,
      msg: e.response.data.message
    })
  }

  function handleAlways() {
    setLoading(false);
  }

  function onFormChange(e) {
    let { name, value } = e.target;
    form[name] = value;
    setForm({ ...form });
  }

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);

    if (!checkPasswords()) {
      setLoading(false);
      return false;
    }

    await api.post(urls.REGISTER, form)
      .then(handleSuccess.bind(this))
      .catch(handleError.bind(this))
      .finally(handleAlways.bind(this));
  }

  function checkPasswords() {
    let passwordConfirmationElement = document.getElementsByName("passwordConfirmation")[0];
    let passwordElement = document.getElementsByName("password")[0];
    let valid = passwordConfirmationElement.value === passwordElement.value;

    passwordConfirmationElement.setCustomValidity(valid ? "" : "Passwords Don't Match");
    passwordConfirmationElement.reportValidity();

    return valid;
  }

  return (
    <div className="page">
      <form className="form" onSubmit={e => onSubmit(e)} method="post">
        <Link to="/">
          <img src={logo} className="logo" alt="logo" />
        </Link>
        <div className="container">
          <input
            type="text"
            name="firstName"
            required
            pattern="[A-Za-z0-9]{1,255}"
            title="You are not allowed to add a field with this size"
            value={form.firstName}
            onChange={onFormChange}
            className="splitLeft"
            placeholder="Primeiro Nome">
          </input>
          <input
            type="text"
            name="lastName"
            required
            pattern="[A-Za-z0-9]{1,255}"
            title="You are not allowed to add a field with this size"
            value={form.lastName}
            onChange={onFormChange}
            className="splitRight"
            placeholder="Último Nome">
          </input>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={onFormChange}
            placeholder="E-mail">
          </input>
          <input
            type="password"
            name="password"
            required
            pattern="[A-Za-z0-9]{6,30}"
            title="Your password must have at least 6 digits until 30 digits"
            value={form.password}
            onChange={onFormChange}
            placeholder="Senha">
          </input>
          <input
            type="password"
            name="passwordConfirmation"
            required
            pattern="[A-Za-z0-9]{6,30}"
            title="Your password must have at least 6 digits until 30 digits"
            value={form.passwordConfirmation}
            onChange={onFormChange}
            onKeyUp={checkPasswords}
            placeholder="Confirme sua senha">
          </input>
          <button
            type="submit"
            className={loading ? 'button is-link is-loading' : ''}>Registrar
          </button>
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
