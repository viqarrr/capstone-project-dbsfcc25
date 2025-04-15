import React from "react";
import "../styles/authentication/styleregis.css";

const RegisterForm = () => {
  return (
    <div class="container">
      <h2>Daftar</h2>
      <form id="registerForm">
        <div class="input-wrapper">
          <label for="username">Username / E-mail</label>
          <div class="input-field">
            <span class="material-symbols-outlined">person</span>
            <input
              type="text"
              id="username"
              placeholder="Tulis Username mu disini"
              required
            />
          </div>
        </div>
        <div class="input-wrapper">
          <label for="password">Password</label>
          <div class="input-field">
            <span class="material-symbols-outlined">key</span>
            <input
              type="text"
              id="password"
              placeholder="Tulis kata sandi mu disini"
              required
            />
          </div>
        </div>
        <button id="regist-btn" type="submit">
          Daftar
        </button>
      </form>
      <p>Atau daftar melalui</p>
      <div class="icons">
        <img src="img/icon1.png" width="40px" height="45px" alt="Google" />
        <img src="img/icon2.png" width="40px" height="40px" alt="Apple" />
      </div>
      <p>
        Anda sudah memiliki akun? Silahkan
        <a href="login.html">Masuk Disini!</a>
      </p>
    </div>
  );
};

export default RegisterForm;
