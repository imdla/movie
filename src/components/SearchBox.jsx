import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBox() {
  const [intputData, setInputData] = useState("");
  const navigate = useNavigate();

  function handleChange(e) {
    setInputData(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    navigate(`movie/search/${intputData}`);
    setInputData("");
  }

  return (
    <div id="searchBox">
      <form onSubmit={handleSubmit}>
        <button onClick={handleSubmit} className="searchBtn">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>

        <input
          type="text"
          name="searchInput"
          id="searchInput"
          placeholder="검색"
          value={intputData}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
