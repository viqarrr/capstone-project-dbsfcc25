import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const onRegister = async (email, password, phoneNumber, role) => {
    try {
        const requestBody = { email, phoneNumber, password,  role };
        console.log(requestBody)
        const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/users/register`, requestBody, {
          withCredentials: true
      });
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  };
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const userData = {
      email: data.email,
      password: data.password,
      phoneNumber: data.phoneNumber,
      role: data.role,
    };
    onRegister(data.email, data.password, data.phoneNumber, data.role);
    console.log("User  Registered:", userData);
    navigate("/login");
  };

  return (
    <div className="login">
      <div className="login-container register">
        <h2>Daftar</h2>
        <form id="loginForm" onSubmit={handleSubmit(onSubmit)}>
          <div className="input-wrapper">
            <label htmlFor="email">E-mail</label>
            <div className="input-field">
              <span className="material-symbols-outlined">person</span>
              <input
                type="text"
                id="email"
                placeholder="Tulis Email mu disini"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Format email tidak valid",
                  },
                })}
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
          <div className="input-wrapper">
            <label htmlFor="phoneNumber">Nomor Telepon</label>
            <div className="input-field">
              <span className="material-symbols-outlined">phone</span>
              <input
                type="tel"
                id="phoneNumber"
                placeholder="Masukkan nomor telepon mu disini"
                {...register("phoneNumber", {
                  required: "Nomor telepon is required",
                  pattern: {
                    value: /^[0-9]*$/, // Hanya angka
                    message: "Hanya angka yang diperbolehkan",
                  },
                })}
              />
              {errors.phoneNumber && (
                <p className="error">{errors.phoneNumber.message}</p>
              )}
            </div>
          </div>
          <div className="input-wrapper">
            <label>Role</label>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  value="recruiter"
                  {...register("role", { required: "Role is required" })}
                />
                Admin
              </label>
              <label>
                <input type="radio" value="jobseeker" {...register("role")} />
                User
              </label>
              {errors.role && <p className="error">{errors.role.message}</p>}
            </div>
          </div>
          <button id="login-btn" type="submit">
            Daftar
          </button>
        </form>
        <p>
          Anda sudah memiliki akun? Silahkan
          <Link to="/login"> Masuk Disini!</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
