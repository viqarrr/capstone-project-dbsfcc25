import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="header-wrapper">
        <div className="header-box">
          <h1>
            Lihat Tren pekerjaan, Pendapatan, dan Skill populer di dashboard
          </h1>
          <button className="btn-dashboard">Lihat Dashboard</button>
        </div>
      </div>
      <div className="container">
        <div className="left-section">
          <img src="img/homepage/logo.png" alt="icon" className="icon" />
          <p>
            Lorem ipsum vitae consequat morbi egestas eu faucibus facilisi sed
            non duis dui venenatis nulla tellus enim aliquet congue adipiscing.
          </p>
          <a
            href="https://github.com/rafifdiofadilah/ProjectCapstone"
            className="github-link"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
              alt="GitHub"
              className="github-icon"
            />
            Link Github WorkFinder
          </a>
        </div>
        <div className="right-section">
          <ul>
            <li>
              <a href="#">Cari Pekerjaan</a>
            </li>
            <li>
              <a href="#">Cari Perusahaan</a>
            </li>
            <li>
              <a href="#">Pilih Course</a>
            </li>
            <li>
              <a href="#">Daftar</a>
            </li>
            <li>
              <a href="#">Masuk</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer">
        <p>Hak Cipta © 2025 || Coding Camp powered by DBS || CC25-SF079</p>
      </div>
    </footer>
  );
};

export default Footer;
