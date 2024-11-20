import React from "react";
import { useNavigate } from "react-router-dom";
import MakeItem from "./MakeItem";
import { typeAmount } from "../utills/movieInfo";

export default function MovieListsItem({ listType }) {
  const navigate = useNavigate();

  let movieItems = <MakeItem listType={listType} count={typeAmount}></MakeItem>;

  return (
    <>
      <h3>{listType}</h3>
      <button onClick={() => navigate(`/movie/${listType}`)}>더보기</button>
      <ul className="ulTag">{movieItems}</ul>
    </>
  );
}
