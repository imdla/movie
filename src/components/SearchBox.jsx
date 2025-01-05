import React, { useState } from "react";

export default function SearchBox() {
  const [intputDate, setInputData] = useState("");

  function handleClick() {}

  return (
    <div id="searchBox">
      <form action="">
        <button className="searchBtn">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
        <input
          type="text"
          name="searchInput"
          id="searchInput"
          placeholder="검색"
        />
      </form>
    </div>
  );
}
