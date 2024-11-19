import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const { isLoggedIn, authName } = useSelector((state) => state.auth);

  return (
    <header>
      <div>
        <h1 className="text-center">Movie Page</h1>
      </div>

      <nav>
        <ul className="ulTag flex-center">
          <li>
            <Link to={"/"}>
              <h2>HOME</h2>
            </Link>
          </li>
          <li>
            <Link to={"/login"}>
              <h2>{isLoggedIn ? "LOGOUT" : "LOGIN"}</h2>
            </Link>
          </li>
          <li>
            <Link to={"/mypage"}>
              <h2>{isLoggedIn ? `${authName}님` : "MY PAGE"}</h2>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
