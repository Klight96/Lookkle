import React, { useState } from 'react';

import './searchpage.css'

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
   
    window.location.href = `/result?query=${encodeURIComponent(searchQuery)}`;
  };

  return (
    <div className="google-clone-container">
      <div className="container">
        <div className="lookle-banner">
          <div className="lookle-text">LOOKKLE</div>
        </div>
        <div className="google-search-bar">
          <div className="google-search-icon">
            <span role="img" aria-label="Search Icon">🔍</span>
          </div>
          <input
            type="text"
            className="google-search-input"
            placeholder="Search Lookkle"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="google-search-button" onClick={handleSearch}>
            Lookkle Search
          </button>
      

        </div>
      </div>
    </div>

  );
};

export default SearchPage;

