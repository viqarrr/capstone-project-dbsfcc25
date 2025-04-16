import React from "react";

const Reviews = () => {
  return (
    <section className="reviews">
      <h2>Testimoni dari Pengguna Kami</h2>
      <div className="review-grid">
        <div className="review-card">
          <p>
            "Saya sangat puas dengan layanan yang diberikan. Prosesnya cepat dan
            mudah!"
          </p>
          <div className="user">
            <span className="material-symbols-outlined">account_circle</span>
            <div>
              <h4>Valencia Queena</h4>
              <p>Fresh Graduate</p>
            </div>
          </div>
        </div>
        <div className="review-card">
          <p>
            "Platform ini sangat membantu saya dalam mencari pekerjaan yang
            sesuai dengan keahlian saya."
          </p>
          <div className="user">
            <span className="material-symbols-outlined">account_circle</span>
            <div>
              <h4>Rudi Hartono</h4>
              <p>Software Engineer</p>
            </div>
          </div>
        </div>
        <div className="review-card">
          <p>
            "Saya merekomendasikan platform ini kepada teman-teman saya. Sangat
            bermanfaat!"
          </p>
          <div className="user">
            <span className="material-symbols-outlined">account_circle</span>
            <div>
              <h4>Maria Sari</h4>
              <p>Marketing Specialist</p>
            </div>
          </div>
        </div>
        <div className="review-card">
          <p>
            "Pengalaman saya sangat positif. Tim dukungan pelanggan sangat
            responsif."
          </p>
          <div className="user">
            <span className="material-symbols-outlined">account_circle</span>
            <div>
              <h4>Andi Prasetyo</h4>
              <p>Data Analyst</p>
            </div>
          </div>
        </div>
        <div className="review-card">
          <p>
            "Saya berhasil mendapatkan pekerjaan impian saya berkat platform
            ini!"
          </p>
          <div className="user">
          <span className="material-symbols-outlined">account_circle</span>
            <div>
              <h4>Intan Permata</h4>
              <p>Graphic Designer</p>
            </div>
          </div>
        </div>
        <div className="review-card">
          <p>
            "Sangat mudah untuk menggunakan platform ini. Saya sangat
            merekomendasikannya!"
          </p>
          <div className="user">
            <span className="material-symbols-outlined">account_circle</span>
            <div>
              <h4>Fajar Nugroho</h4>
              <p>Content Writer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
