import React from "react";
import SearchBar from "./SearchBar";

const Hero = ({ search }) => {
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
      {search && <SearchBar/>}
    </section>
  );
};

export default Hero;
