import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const { isLoggedIn, userName } = useSelector((state) => state.auth.user);

  return (
    <header className="container">
      <div className="flex-center flex-wrap justy-between ">
        <div>
          <Link to={"/"}>
            <h1 className="text-center logo">Movie Page</h1>
          </Link>
        </div>

        <nav>
          <ul className="ulTag flex-wrap flex-center">
            <li className="search">
              <Link to={"/"}>
                <form action="">
                  <i class="fa-solid fa-magnifying-glass"></i>
                  <input
                    type="text"
                    name="searchInput"
                    id="searchInput"
                    placeholder="검색"
                  />
                </form>
              </Link>
            </li>
            <li>
              <Link to={"/login"}>
                <h4>{isLoggedIn ? "로그아웃" : "로그인"}</h4>
              </Link>
            </li>
            <li>
              <Link to={"/mypage"}>
                <h4 className="myPage">
                  {isLoggedIn ? `${userName}님` : "MY PAGE"}
                </h4>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div>
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
