import React, { useEffect, useState } from "react";
import axios from "axios";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [bookmarkedJobs, setBookmarkedJobs] = useState(new Set());

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/jobs`
        );
        setJobs(response.data.jobs);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  const toggleBookmark = (jobId) => {
    setBookmarkedJobs((prev) => {
      const updatedBookmarks = new Set(prev);
      if (updatedBookmarks.has(jobId)) {
        updatedBookmarks.delete(jobId);
      } else {
        updatedBookmarks.add(jobId);
      }
      return updatedBookmarks;
    });
  };

  return (
    <div className="section">
      <div className="job-section">
        {jobs.map((job) => (
          <div className="job-card" key={job._id}>
            <img
              src={job.company.logo || "img/job/Netflix.png"} // Ganti dengan logo perusahaan jika ada
              alt={job.company.name} // Ganti dengan nama perusahaan
              className="job-logo"
            />
            <div className="job-info">
              <div style={{ color: "gray" }}>{job.company.name}</div>
              <div className="job-title">{job.title}</div>
              <div className="job-details">
                <span>🌍 {job.location}</span>
                <span>💼 {job.jobType}</span>
                <span>🧠 {job.experienceLevel}</span>
                <span>🏠 {job.remote ? "Remote" : "On-site"}</span>
              </div>
            </div>
            <div className="bookmark-icon" onClick={() => toggleBookmark(job._id)}>
              <span className="material-symbols-outlined">
                {bookmarkedJobs.has(job._id) ? "bookmark_added" : "bookmark"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;