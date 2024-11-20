import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const { isLoggedIn, authName } = useSelector((state) => state.auth);

  return (
    <header className="flex-center justy-between container">
      <div>
        <Link to={"/"}>
          <h1 className="text-center logo">Movie Page</h1>
        </Link>
      </div>

      <nav>
        <ul className="ulTag flex-center">
          <li></li>
          <li>
            <Link to={"/login"}>
              <h4>{isLoggedIn ? "로그아웃" : "로그인"}</h4>
            </Link>
          </li>
          <li>
            <Link to={"/mypage"}>
              <h4 className="myPage">{isLoggedIn ? `${authName}님` : "MY PAGE"}</h4>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
