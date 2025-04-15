import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";

const Navbar = () => {
  const { isAuthenticated } = useAuth();

  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="/img/homepage/logo.png" alt="WorkFinder" />
        </Link>
      </div>
      <nav className="nav-list">
        <ul>
          <li>
            <Link to="/jobs">Cari Pekerjaan</Link>
          </li>
          <li>
            <Link to="/companies">Cari Perusahaan</Link>
          </li>
          <li>
            <Link to="/courses">Pilih Course</Link>
          </li>
        </ul>
      </nav>
      {isAuthenticated() ? (
        <div className="user-profile">
          <span>Akun Saya</span>
          <img
            src="https://img.icons8.com/ios-filled/24/737373/user-male-circle.png"
            alt="User  Icon"
          />
        </div>
      ) : (
        <div className="auth-buttons">
          <Link to="/login" className="Masuk">Masuk</Link>
          <Link to="/register" className="Daftar">Daftar</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
