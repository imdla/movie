import React from "react";

export default function SearchBox() {
  return (
    <>
      <form action="">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          name="searchInput"
          id="searchInput"
          placeholder="검색"
        />
      </form>
    </>
  );
}
