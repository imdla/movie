import React from "react";
import imgUrl from "../utills/imgUrl";
import { Link } from "react-router-dom";

export default function MovieItem({ movieId, title, content, poster_path }) {
  return (
    <>
      <Link to={`/movie/detail/${movieId}`}>
        <h4>{title}</h4>
        <p>{content}</p>
        <img src={`${imgUrl()}${poster_path}`} alt="" />
      </Link>
    </>
  );
}
