import React from "react";
import MovieLists from "../pages/MovieLists";

export default function MainLayout() {
  return (
    <div className="container">
      <h2>Main Page</h2>
      <MovieLists></MovieLists>
    </div>
  );
}
