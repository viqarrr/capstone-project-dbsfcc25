import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import axios from "axios";

const LoginForm = () => {
  const onLogin = async (email, password) => {
    try {
        const requestBody = { email, password };
        console.log(requestBody)
        const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/users/login`, requestBody, {
          withCredentials: true
      });

    } catch (error) {
      
    }
  };
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const userData = { email: data.email };
    onLogin( data.email, data.password );
    login(userData);
    console.log("User  logged in:", userData);
    navigate("/")
  };

  return (
    <div className="login">
      <div className="login-container">
        <h2>Masuk</h2>
        <form id="loginForm" onSubmit={handleSubmit(onSubmit)}>
          <div className="input-wrapper">
            <label htmlFor="username">E-mail</label>
            <div className="input-field">
              <span className="material-symbols-outlined">person</span>
              <input
                type="text"
                id="username"
                placeholder="Tulis Username mu disini"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && <p className="error">{errors.email.message}</p>}
            </div>
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <div className="input-field">
              <span className="material-symbols-outlined">key</span>
              <input
                type="password"
                id="password"
                placeholder="Tulis kata sandi mu disini"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <p className="error">{errors.password.message}</p>
              )}
            </div>
          </div>
          <div className="forgot-password">
            <Link to="#">Lupa sandi?</Link>
          </div>
          <button id="login-btn" type="submit">
            Masuk
          </button>
        </form>
        <p>
          Belum punya akun ya? Silahkan{" "}
          <Link to="/register">Daftar Disini!</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
