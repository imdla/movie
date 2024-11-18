import React from "react";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <header>헤더</header>
      <Outlet></Outlet>
      <footer>푸터</footer>
    </>
  );
}
