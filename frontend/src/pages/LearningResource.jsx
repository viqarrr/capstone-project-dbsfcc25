import React, { useEffect, useState } from "react";
import "../styles/learningSuggest/style.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";

const LearningResource = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/courses`,
          {
            withCredentials: true, // This enables sending cookies and credentials
          }
        );

        console.log(response.data.learningSuggests);
        setCourses(response.data.learningSuggests);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="courses-container">
        <section className="hero-section">
          <img src="img/courses/image.png" alt="Belajar Online" />
          <div className="hero-text">
            <small>Pembelajaran Online</small>
            <h2>Upgrade Skill, Buka Peluang Baru! 🚀</h2>
            <p>
              Tingkatin skill kamu dengan course kece yang bisa bikin kamu makin
              siap bersaing! 💯 Plus, dapetin sertifikat keren yang bikin
              rekruter makin tertarik sama kamu. Yuk, belajar sekarang dan jadi
              versi terbaik dari diri kamu!
            </p>
          </div>
        </section>

        <h2>Course Terbaru</h2>

        <div className="course-container">
          {courses.map((course) => (
            <a
              key={course.id}
              className="course-card"
              href={course.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={course.imageUrl} alt={course.title} />
              <div className="course-content">
                <div className="course-title">{course.title}</div>
                <div className="course-desc">{course.description}</div>
                <div className="course-price">{course.price}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LearningResource;
