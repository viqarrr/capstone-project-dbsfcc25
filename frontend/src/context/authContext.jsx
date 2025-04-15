/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState } from "react";

// Membuat AuthContext
const AuthContext = createContext();

// Provider untuk AuthContext
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // State untuk menyimpan informasi pengguna

  const login = (userData) => {
    setUser(userData); // Simpan data pengguna saat login
  };

  const logout = () => {
    setUser(null); // Hapus data pengguna saat logout
  };

  const isAuthenticated = () => {
    return user !== null; // Cek apakah pengguna terautentikasi
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook untuk menggunakan AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
