import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CompanyList = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/companies`, {
          withCredentials: true // This enables sending cookies and credentials
      });
      
        console.log(response.data.companies);
        setCompanies(response.data.companies);
      } catch (error) {
        console.error("Error fetching companies:", error);
      }
    };

    fetchCompanies();
  }, []);

  const colors = ['green', 'orange', 'purple', 'blue', 'pink'];  

  return (
    <div>
      <div className="title-bar">
        <h2>Perusahaan menarik <span style={{ color: 'grey' }}>({companies.length})</span></h2>
      </div>

      <div className="section">
        <div className="company-section">
          {companies.map((company,index) => (
            <Link to={`/companies/${company._id}`} className="company-card-link" key={company._id}>
              <div className={`company-card ${colors[index % colors.length]}`}>
                <div className="company-card-header">
                  <img src={company.logo} alt={company.name} className="company-logo" />
                  <h2 className="company-company">{company.name}</h2>
                </div>
                <p className="company-desc">
                  {company.description}
                </p>
                <div className="company-card-footer">
                  <button className="company-button">{company.jobCount} Pekerjaan Tersedia</button>
                  <span className="arrow-icon">↗</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyList;