import React from "react";
import "../styles/company/style.css";
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import CompanyList from "../components/CompanyList";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <CompanyList />
      <Footer />
    </div>
  );
};

export default HomePage;
