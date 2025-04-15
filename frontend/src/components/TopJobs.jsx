import React, { useEffect, useState } from "react";
import axios from "axios";

const TopJobs = () => {
  const [topJobs, setTopJobs] = useState([]);

  useEffect(() => {
    const fetchTopJobs = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/jobs`);
        console.log(response.data.jobs);
        setTopJobs(response.data.jobs.slice(0, 5));
      } catch (error) {
        console.error("Error fetching top jobs:", error);
      }
    };

    fetchTopJobs();
  }, []);

  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  });

  const colors = ['green', 'orange', 'purple', 'blue', 'pink'];

  return (
    <section className="top-jobs">
      <div className="category-title">
        <h2>
          <span className="highlight">Pekerjaan</span> Unggulan
        </h2>
        <a href="#">
          Lihat Lainnya{" "}
          <span className="material-symbols-outlined">arrow_forward</span>
        </a>
      </div>

      <div className="job-previews">
        {topJobs.map((job, index) => (
          <div className={`job-preview ${colors[index % colors.length]}`} key={job._id}>
            <div className="card-header">
              <div className="logo-name">
                <img
                  src={`/img/job/Netflix.png`} //ntar ganti kalo udah bisa cloudinary
                  alt="logo"
                  className="company-logo"
                />
                <span className="company-name">{job.company.name}</span>
              </div>
              <span className="material-symbols-outlined">bookmark</span>
            </div>
            <h3>{job.title}</h3>
            <p>{job.description}</p>
            <div className="labels">
              <span className="label">{job.jobType}</span>
              <span className="label">{job.experienceLevel}</span>
            </div>
            <div className="card-footer">
              <div className="rate-location">
                <span className="rate">{formatter.format(job.salary)}/bln</span>
                <span className="location">{job.location}</span>
              </div>
              <button className="detail-btn">Detail</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopJobs;
