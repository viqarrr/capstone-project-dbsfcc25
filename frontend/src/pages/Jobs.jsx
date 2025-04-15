import React from "react";
import '../styles/joblist/style.css'
import Hero from "../components/Hero";
import JobList from "../components/JobList";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Jobs = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <div className="title-bar">
        <h2>
          Lowongan Pekerjaan <span style={{ color: "grey" }}>(206)</span>
        </h2>
      </div>
      <JobList />
      <Footer />
    </div>
  );
};

export default Jobs;
