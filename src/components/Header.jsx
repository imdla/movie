import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchBox from "./SearchBox";

export default function Header() {
  const { isLoggedIn, userName } = useSelector((state) => state.auth.user);

  return (
    <header>
      <div className="container flex-center flex-wrap justy-between ">
        <Link to={"/"}>
          <h1 className="text-center logo">
            <img src="./public/logo.png" alt="logo" />
          </h1>
        </Link>

        <nav>
          <ul className="ulTag flex-wrap flex-center">
            <li className="search">
              <SearchBox></SearchBox>
            </li>
            <li>
              <Link to={"/login"}>
                <h4>{isLoggedIn ? "로그아웃" : "로그인"}</h4>
              </Link>
            </li>
            <li>
              <h4 className="myPage">
                {isLoggedIn ? (
                  <Link to={"/mypage"}>
                    <h4>{userName}님</h4>
                  </Link>
                ) : (
                  <Link to={"/signup"}>
                    <h4>회원가입</h4>
                  </Link>
                )}
              </h4>
            </li>
          </ul>
        </nav>
      </div>

      <div className="container">
        <ul className="flex-center flex-wrap justy-start ulTag hash">
          <li>
            <Link to={"movie/now_playing"}># 현재 상영</Link>
          </li>
          <li>
            <Link to={"movie/popular"}># 인기있는</Link>
          </li>
          <li>
            <Link to={"movie/top_rated"}># 순위별</Link>
          </li>
          <li>
            <Link to={"movie/genre/16"}># 애니메이션</Link>
          </li>
          <li>
            <Link to={"movie/genre/53"}># 스릴러</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
