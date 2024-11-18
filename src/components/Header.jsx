import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div>
        <h1>Movie Page</h1>
      </div>

      <nav>
        <ul>
          <li>
            <Link to={"/"}>
              <h2>HOME</h2>
            </Link>
          </li>
          <li>
            <Link to={"/login"}>
              <h2>LOGIN</h2>
            </Link>
          </li>
          <li>
            <Link to={"/mypage"}>
              <h2>MY PAGE</h2>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
