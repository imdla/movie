import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import movieApi from "../api/movieApi";
import { imgUrl } from "../utils/imgUrl";

import styles from "../css/MyPage.module.css";
import EmptyMyPage from "../components/SavedEmpty";
import MyPageNotation from "../components/MyPageNotation";

export default function MyPage() {
  const navigate = useNavigate();
  const [movieItems, setMovieItems] = useState([]);
  const [isActiveSave, setIsActiveSave] = useState(true);
  const { isLoggedIn, userName } = useSelector((state) => state.auth.user);
  const { saveMovieId } = useSelector((state) => state.movieSave);

  useEffect(() => {
    if (!isLoggedIn) {
      if (window.confirm("로그인 후 이용 가능합니다. 로그인 하시겠습니까?")) {
        navigate("/login");
      }
    }
  }, [isLoggedIn]);

  useEffect(() => {
    function getMovieSaveItems() {
      async function func() {
        const savedMovies = [];

        for (let movieId of saveMovieId) {
          const movieItem = await movieApi.getMovieById(movieId);
          savedMovies.push(movieItem);
        }
        setMovieItems(savedMovies);
      }
      func();
    }

    getMovieSaveItems();
  }, [saveMovieId]);

  const movieSaveItems = movieItems.map((item) => {
    return (
      <li key={item.imdb_id}>
        <Link to={`/movie/detail/${item.id}`}>
          <img src={`${imgUrl}${item.poster_path}`} alt="" />
        </Link>
      </li>
    );
  });

  function handleClick(e) {
    if (e.target.innerHTML === "저장") {
      setIsActiveSave(true);
    } else {
      setIsActiveSave(false);
    }
  }

  const saveColor = isActiveSave ? "#fff" : "#999";
  const notationColor = isActiveSave ? "#999" : "#fff";
  return (
    <div className={`container ${styles.myPageMovie}`}>
      <ul className={styles.tabBtn}>
        <li>
          <Link>
            <button style={{ color: saveColor }} onClick={handleClick}>
              저장
            </button>
          </Link>
        </li>
        <li>
          <Link>
            <button style={{ color: notationColor }} onClick={handleClick}>
              기록
            </button>
          </Link>
        </li>
      </ul>

      <div className={styles.tabCon}>
        {isActiveSave ? (
          <ul className={`ulTag movieList`}>
            {movieSaveItems[0] ? movieSaveItems : <EmptyMyPage></EmptyMyPage>}
          </ul>
        ) : (
          <MyPageNotation />
        )}
      </div>
    </div>
  );
}
