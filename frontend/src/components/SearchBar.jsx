import React, { useState } from "react";
import { useSearch } from "../context/searchContext";

const SearchBar = () => {
  const { handleSearch } = useSearch()
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");

  const onSearch = () => {
    handleSearch(jobTitle, location);
  };

  return (
    <div className="search-bar">
      <span className="material-symbols-outlined">search</span>
      <input
        type="text"
        placeholder="Nama Pekerjaan"
        value={jobTitle}
        onChange={(e) => setJobTitle(e.target.value)}
      />
      <span className="material-symbols-outlined">place</span>
      <input
        type="text"
        placeholder="Tempat, Kota atau Negara"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={onSearch}>Cari</button>
    </div>
  );
};

export default SearchBar;