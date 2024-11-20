import React from "react";

export default function MovieDetailInfo({ movieItem }) {
  const { vote_average, overview, genres } = movieItem;
  const genreItem = genres.map((genre) => {
    return <li key={genre.id}>{genre.name}</li>;
  });

  return (
    <>
      <ul>
        <li>
          <p>
            <b>Vote</b> : {vote_average}
          </p>
        </li>
        <li>
          <p>
            <b>Overview</b>
          </p>
          <p>{overview}</p>
        </li>
        <li>
          <p>
            <b>Genre</b>
          </p>
          <ul>{genreItem}</ul>
        </li>
      </ul>
    </>
  );
}
