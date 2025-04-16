import React, { useEffect, useState } from "react";
import axios from "axios";

const TopCompanies = () => {
  const [topCompanies, setTopCompanies] = useState([]);

  useEffect(() => {
    const fetchTopCompanies = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/companies`);
        console.log(response.data.companies);
        setTopCompanies(response.data.companies.slice(0, 6));
      } catch (error) {
        console.error("Error fetching top companies:", error);
      }
    };

    fetchTopCompanies();
  }, []);

  return (
    <section className="top-company">
      <div className="category-title">
        <h2>
          <span className="highlight">Perusahaan</span> Unggulan
        </h2>
        <a href="#">
          Lihat Lainnya{" "}
          <span className="material-symbols-outlined">arrow_forward</span>
        </a>
      </div>

      <div className="company-list">
        {topCompanies.map((company, index) => (
          <div className={`company-card ${index % 2 === 0 ? '' : 'bg'}`} key={company._id}>
            <div className="line"></div>
            <div className="company-header">
              <img
                src={company.logo} // Assuming the logo URL is stored in the company object
                alt={company.name}
                className="logo"
              />
              <h3>{company.name}</h3>
            </div>
            <p>{company.description}</p>
            <div className="company-footer">
              <span>{company.jobCount} Pekerjaan tersedia</span> {/* Assuming jobCount is available */}
              <span className="material-symbols-outlined">arrow_outward</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopCompanies;