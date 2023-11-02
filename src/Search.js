import React from "react";

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search">
      <input
        className="search__input"
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default Search;
