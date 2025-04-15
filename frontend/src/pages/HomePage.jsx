import React from "react";
import "../styles/homepage/style.css";
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import TopJobs from '../components/TopJobs'
import Reviews from '../components/Reviews'
import Footer from '../components/Footer'
import TopCompanies from '../components/TopCompanies'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <TopJobs />
      <Reviews />
      <TopCompanies />
      <Footer />
    </div>
  );
};

export default HomePage;
