import React, { useState } from "react";
import MovieListsItem from "../components/MovieListsItem";
import { useEffect } from "react";
import movieApi from "../api/movieApi";

export default function MovieLists() {
  const [movieList, setMovieList] = useState();
  const type = "now_playing"

  useEffect(() => {
    async function getMovieList() {
      try {
        const data = movieApi.getMovies({ type });
        const movieLists = data.results
        setMovieList(movieLists)
      } catch (err) {
        console.log("api 에러!!!!!!!!!!!")
      } finally {
      }
    }
    getMovieList();
  });

  return (
    <>
      <MovieListsItem listType={type}></MovieListsItem>
    </>
  );
}
