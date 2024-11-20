import React from "react";
import MovieLists from "../pages/MovieLists";

export default function MainLayout() {
  return (
    <div className="container">
      <h2>추천 영화</h2>
      <MovieLists></MovieLists>
    </div>
  );
}
