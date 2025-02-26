import React from 'react';
import './style.css'

function Searchbar({ setQuery }) {
  return (
    <>
      <div className="search-container">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="Search for a country..." onChange={(e) => setQuery(e.target.value.toLocaleLowerCase())} />
      </div>
    </>
  );
}

export default Searchbar;
