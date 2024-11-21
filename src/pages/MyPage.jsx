import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import movieApi from "../api/movieApi";
import MovieItem from "../components/MovieItem";
import EmptyMyPage from "../components/EmptyMyPage";

export default function MyPage() {
  const navigate = useNavigate();
  const [movieItems, setMovieItems] = useState([]);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { saveMovieId } = useSelector((state) => state.movieSave);

  useEffect(() => {
    if (!isLoggedIn) {
      alert("로그인이 필요합니다.");
      navigate("/login");
    }
  }, [isLoggedIn]);

  // store 사용한 이전 코드
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
        <MovieItem movieItem={item}></MovieItem>
      </li>
    );
  });

  return (
    <div className="container myPageMovie">
      <h2>My Favorite Movie Page</h2>
      <div>
        <ul className="ulTag movieList">
          {/* {saveMovieId[0] ? movieSaveItems : <EmptyMyPage></EmptyMyPage>} */}
          {movieSaveItems}
        </ul>
      </div>
    </div>
  );
}
