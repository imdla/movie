import React, { useState } from "react";

export default function SearchBox() {
  const [intputData, setInputData] = useState("");

  function handleChange(e) {
    setInputData(e.target.value);
  }

  function handleSubmit(e) {
    e.prventDefault();
    console.log(intputData);
    setInputData("");
  }

  return (
    <div id="searchBox">
      <form onSubmit={handleSubmit}>
        <button className="searchBtn">
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
