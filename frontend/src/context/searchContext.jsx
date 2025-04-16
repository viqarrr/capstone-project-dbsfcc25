import React, { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export const useSearch = () => {
  return useContext(SearchContext);
};

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationTerm, setLocationTerm] = useState("");

  const handleSearch = (title, location) => {
    setSearchTerm(title);
    setLocationTerm(location);
  };

  return (
    <SearchContext.Provider value={{ searchTerm, locationTerm, handleSearch }}>
      {children}
    </SearchContext.Provider>
  );
};