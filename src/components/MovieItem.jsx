import React from "react";
import imgUrl from "../utills/imgUrl";

export default function MovieItem({ title, content, poster_path }) {
  return (
    <>
      <h4>{title}</h4>
      <p>{content}</p>
      <img src={`${imgUrl()}${poster_path}`} alt="" />
    </>
  );
}
