import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import movieApi from "../api/movieApi";
import MovieItem from "../components/MovieItem";
import { useState } from "react";

export default function MyPage() {
  const navigate = useNavigate();
  const [movieItems, setMovieItems] = useState([]);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { saveMovieId } = useSelector((state) => state.movieSave);

  useEffect(() => {
    if (!isLoggedIn) {
      alert("로그인이 필요합니다.");
      navigate("/login/request");
    }
  }, [isLoggedIn]);

  useEffect(() => {
    console.log(saveMovieId);

    function getMovieSaveItems() {
      // saveMovieId.map(async (id) => {
      //   const movieItem = await movieApi.getMovieById(id);
      //   setMovieItems([...movieItems, movieItem]);
      // });
      async function func(params) {
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

  console.log(movieItems);

  const movieSaveItems = movieItems.map((item) => {
    return (
      <li key={item.id}>
        <MovieItem movieItem={item}></MovieItem>
      </li>
    );
  });

  return (
    <>
      <h2>My Favorite Movie Page</h2>
      <div>
        <ul>
          <li>{movieSaveItems}</li>
        </ul>
      </div>
    </>
  );
}
