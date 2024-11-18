import React from "react";
import { useEffect, useState } from "react";
import movieApi from "../api/movieApi";
import MovieItem from "./MovieItem";

export default function MakeItem({ listType, count }) {
  const [movieList, setMovieList] = useState();

  useEffect(() => {
    async function getMovieList() {
      try {
        const data = await movieApi.getMovies(listType);
        setMovieList(data);
      } catch (err) {
        console.error(err);
      } finally {
      }
    }
    getMovieList();
  });

  if (!movieList) {
    return <div>로딩중</div>;
  }

  let cnt = 0;
  const movieItems = movieList.map((movieItem) => {
    if (cnt < count) {
      cnt += 1;
      const { id, title, overview, poster_path } = movieItem;

      return (
        <li key={id}>
          <MovieItem
            movieId={id}
            title={title}
            content={overview}
            poster_path={poster_path}
          ></MovieItem>
        </li>
      );
    }
  });

  return <>{movieItems}</>;
}
