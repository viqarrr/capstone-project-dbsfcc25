import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles//company/companyDetail.css';
import { useParams } from 'react-router-dom';

const CompanyDetail = () => {
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchCompanyDetail = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/companies/${id}`);
        setCompany(response.data);
      } catch (error) {
        console.error("Error fetching company details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanyDetail();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!company) {
    return <div>Company not found.</div>;
  }

  return (
    <div className="company-detail">
      <div className="company-header">
        <img src={company.logo} alt={company.name} className="company-logo" />
        <h1 className="company-name">{company.name}</h1>
      </div>
      <p className="company-description">{company.description}</p>
      <div className="company-info">
        <h2>Details</h2>
        <p><strong>Location:</strong> {company.location}</p>
        <p><strong>Founded:</strong> {company.founded}</p>
        <p><strong>Employees:</strong> {company.employeeCount}</p>
      </div>
      <div className="company-jobs">
        <h2>Available Jobs</h2>
        {company.jobs.length > 0 ? (
          company.jobs.map(job => (
            <div className="job-card" key={job.id}>
              <h3 className="job-title">{job.title}</h3>
              <p className="job-description">{job.description}</p>
              <button className="apply-button">Apply Now</button>
            </div>
          ))
        ) : (
          <p>No jobs available at this time.</p>
        )}
      </div>
    </div>
  );
};

export default CompanyDetail;