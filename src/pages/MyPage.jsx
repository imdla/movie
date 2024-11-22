import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import movieApi from "../api/movieApi";
import MovieItem from "../components/MovieItem";
import EmptyMyPage from "../components/EmptyMyPage";
import { saved } from "../store/slices/movieSaveSlice";
import _ from "lodash";

export default function MyPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [movieItems, setMovieItems] = useState([]);
  const [isSaved, setIsSaved] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { saveMovieId } = useSelector((state) => state.movieSave);

  useEffect(() => {
    if (!isLoggedIn) {
      if (window.confirm("로그인 후 이용 가능합니다. 로그인 하시겠습니까?")) {
        navigate("/login");
      }
    }
  }, [isLoggedIn]);

  useEffect(() => {
    const saveMoviesToGlobalState = async () => {
      if (saveMovieId.length === 0) {
        const savedMoviesLocal = JSON.parse(
          localStorage.getItem("saveMovieId") || "[]"
        );

        if (savedMoviesLocal.length != 0) {
          setIsSaved(true);

          for (let id of savedMoviesLocal) {
            dispatch(saved(id));
          }
        }
      } else {
        setIsSaved(true);
      }
    };
    saveMoviesToGlobalState();
  }, [saveMovieId]);

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
          {console.log(saveMovieId)}
          {console.log(movieSaveItems)}
          {isSaved ? movieSaveItems : <EmptyMyPage></EmptyMyPage>}
        </ul>
      </div>
    </div>
  );
}
