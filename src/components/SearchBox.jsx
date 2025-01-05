import React, { useState } from "react";

export default function SearchBox() {
  const [intputData, setInputData] = useState("");

  function handleChange(e) {
    setInputData(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
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
