import React from "react";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <h2>Main Page - Movie Lists</h2>
      <Outlet></Outlet>
    </>
  );
}
