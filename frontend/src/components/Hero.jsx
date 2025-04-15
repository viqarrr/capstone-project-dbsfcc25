import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="description">
          <h1>Cari Pekerjaan Impian mu dengan Mudah!</h1>
          <p>Lebih dari 5000+ pekerjaan tersedia. Mulai Karirmu Sekarang!</p>
        </div>
        <div className="img">
          <img
            src="/img/homepage/img.png"
            width="450px"
            height={400}
            alt="gambar"
          />
        </div>
      </div>
      <div className="search-bar">
        <span className="material-symbols-outlined">search</span>
        <input type="text" placeholder="Nama Pekerjaan" />
        <span className="material-symbols-outlined">place</span>
        <input type="text" placeholder="Tempat, Kota atau Negara" />
        <button>Cari</button>
      </div>
    </section>
  );
};

export default Hero;
