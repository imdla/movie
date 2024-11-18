import React from "react";
import MovieItem from "./MovieItem";

export default function MakeItem({ movieList, count }) {
  let cnt = 0;
  const movieItems = movieList.map((movieItem) => {
    if (cnt < count) {
      cnt += 1;
      const { id, title, overview, poster_path } = movieItem;

      return (
        <li key={id}>
          <MovieItem
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
