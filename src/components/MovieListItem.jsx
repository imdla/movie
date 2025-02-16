import React from "react";
import { Link } from "react-router-dom";

import movieApi from "../api/movieApi";
import useMovieApi from "../hooks/useMovieApi";
import { imgUrl } from "../utills/imgUrl";

import Loading from "../pages/Loading";
import NotFound from "../pages/NotFound";

export default function MovieItem({ listType, count }) {
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
    if (cnt < count) {
      cnt += 1;
      const { id, title, overview, poster_path } = movieItem;

      return (
        <li key={movieItem.id}>
          <h1 className="grade">{cnt}</h1>

          <Link to={`/movie/detail/${id}`}>
            <img src={`${imgUrl}${poster_path}`} alt="" />
            {/* <div>
              <h3>{title}</h3>
              <p>{overview}</p>
            </div> */}
          </Link>
        </li>
      );
    }
  });

  return <>{movieItems}</>;
}
