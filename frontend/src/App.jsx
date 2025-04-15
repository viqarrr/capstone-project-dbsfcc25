import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Job from "./pages/Jobs";
import JobDetail from "./pages/JobDetail";
import Company from "./pages/Company";
import CompanyDetail from "./pages/CompanyDetail";
import LearningResource from "./pages/LearningResource";
import LearningResourceDetail from "./pages/LearningResourceDetail";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/jobs" element={<Job />} />
        <Route path="/jobs/:id" element={<JobDetail />} />
        <Route path="/companies" element={<Company />} />
        <Route path="/companies/:id" element={<CompanyDetail />} />
        <Route path="/courses" element={<LearningResource />} />
        <Route path="/courses/:id" element={<LearningResourceDetail />} />
      </Routes>
    </Router>
  );
};

export default App;