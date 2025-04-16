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
      <Hero search/>
      <JobList />
      <Footer />
    </div>
  );
};

export default Jobs;
