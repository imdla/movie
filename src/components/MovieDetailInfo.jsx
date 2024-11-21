import React from "react";

export default function MovieDetailInfo({ movieItem }) {
  const { vote_average, overview, genres } = movieItem;
  const genreItem = genres.map((genre) => {
    return <li key={genre.id}>{genre.name}</li>;
  });

  return (
    <>
      <ul>
        <li className="flex-center justy-start ">
          <p>
            <b>평균</b> {vote_average}
          </p>
          <ul className="ulTag detailGenre">{genreItem}</ul>
        </li>
        <li className="ulTag gray">
          <p>{overview}</p>
        </li>
      </ul>
    </>
  );
}
