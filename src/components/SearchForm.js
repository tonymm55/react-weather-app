import React from "react";

function SearchForm({ searchText, setSearchText, handleCitySearch }) {
  const handleInputChange = (event) => setSearchText(event.target.value);

  return (
    <div className="search-form">
      <input type="text" onChange={handleInputChange} value={searchText} />
      <button type="submit" onClick={handleCitySearch}>
        Search Location
      </button>
    </div>
  );
}

export default SearchForm;
