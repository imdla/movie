import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const { isLoggedIn, authName } = useSelector((state) => state.auth);

  return (
    <header className="container">
      <div className="flex-center justy-between ">
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
                <h4 className="myPage">
                  {isLoggedIn ? `${authName}님` : "MY PAGE"}
                </h4>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div>
        <ul className="flex-center ulTag justy-start hash">
          <li>
            <Link to={"/movie/now_playing"}># 현재 상영</Link>
          </li>
          <li>
            <Link to={"/movie/popular"}># 인기있는</Link>
          </li>
          <li>
            <Link to={"/movie/top_rated"}># 순위별</Link>
          </li>
          <li>
            <Link to={"/movie/genre"}># 장르별</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
