import React from "react";
import "../styles/learningSuggest/style.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Data kursus
const courses = [
  {
    id: 1,
    title: "English Course",
    description:
      "Tingkatkan Skill Inggris mu dengan belajar tentang grammar, vocab dll di Coursera!",
    price: "Rp.252.000",
    link: "https://www.coursera.org/learn/careerdevelopment",
    image: "img/courses/coursera.png",
  },
  {
    id: 2,
    title: "Android Developer",
    description:
      "Pelajari bagaimana cara menyusun kode hingga menjadi aplikasi yang menarik!",
    price: "Rp.1.500.000",
    link: "https://www.dicoding.com/learningpaths/7",
    image: "img/courses/dicoding.png",
  },
  {
    id: 3,
    title: "English Course",
    description:
      "Tingkatkan Skill Inggris mu dengan belajar tentang grammar, vocab dll di Coursera!",
    price: "Rp.252.000",
    link: "https://www.coursera.org",
    image: "img/courses/udemy.png",
  },
  {
    id: 4,
    title: "English Course",
    description:
      "Tingkatkan Skill Inggris mu dengan belajar tentang grammar, vocab dll di Coursera!",
    price: "Rp.252.000",
    link: "https://www.coursera.org",
    image: "img/courses/dicoding.png",
  },
  {
    id: 5,
    title: "English Course",
    description:
      "Tingkatkan Skill Inggris mu dengan belajar tentang grammar, vocab dll di Coursera!",
    price: "Rp.252.000",
    link: "https://www.coursera.org",
    image: "img/courses/coursera.png",
  },
  {
    id: 6,
    title: "English Course",
    description:
      "Tingkatkan Skill Inggris mu dengan belajar tentang grammar, vocab dll di Coursera!",
    price: "Rp.252.000",
    link: "https://www.coursera.org",
    image: "img/courses/skillshare.png",
  },
  {
    id: 7,
    title: "English Course",
    description:
      "Tingkatkan Skill Inggris mu dengan belajar tentang grammar, vocab dll di Coursera!",
    price: "Rp.252.000",
    link: "https://www.coursera.org",
    image: "img/courses/skilvul.png",
  },
  {
    id: 8,
    title: "English Course",
    description:
      "Tingkatkan Skill Inggris mu dengan belajar tentang grammar, vocab dll di Coursera!",
    price: "Rp.252.000",
    link: "https://www.coursera.org",
    image: "img/courses/dicoding.png",
  },
];

const LearningResource = () => {
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
              <img src={course.image} alt={course.title} />
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
