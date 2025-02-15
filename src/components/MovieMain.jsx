import React from "react";
import { Link } from "react-router-dom";

import useMovieApi from "../hooks/useMovieApi";
import movieApi from "../api/movieApi";
import imgUrl from "../utills/imgUrl";

import Loading from "../pages/Loading";
import NotFound from "../pages/NotFound";

export default function MovieMain() {
  const listType = "popular";
  const { data: movieList, loading, error } = useMovieApi(
    movieApi.getMovies,
    listType
  );

  if (loading) {
    return <Loading></Loading>;
  }
  if (error) {
    return <NotFound></NotFound>;
  }

  let cnt = 0;
  const movieItems = movieList.map((movieItem) => {
    if (cnt < 5) {
      cnt += 1;
      const { id, backdrop_path } = movieItem;

      return (
        <li key={movieItem.id}>
          <Link to={`/movie/detail/${id}`}>
            <img src={`${imgUrl()}${backdrop_path}`} alt="" />
          </Link>
        </li>
      );
    }
  });

  return <ul>{movieItems}</ul>;
}
