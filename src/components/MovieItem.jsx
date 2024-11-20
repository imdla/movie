import React from "react";
import { Link } from "react-router-dom";
import imgUrl from "../utills/imgUrl";

export default function MovieItem({ movieItem }) {
  const { id, title, overview, poster_path } = movieItem;

  return (
    <>
      <Link to={`/movie/detail/${id}`}>
        <img src={`${imgUrl()}${poster_path}`} alt="" />
        <div>
          <h4>{title}</h4>
          <p>{overview}</p>
        </div>
      </Link>
    </>
  );
}
