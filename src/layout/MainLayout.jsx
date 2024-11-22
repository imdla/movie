import React from "react";
import MovieLists from "../pages/MovieLists";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="container">
      <h2>추천 영화</h2>
      <Outlet></Outlet>
    </div>
  );
}
