import React from "react";
import { useNavigate } from "react-router-dom";
import { typeAmount } from "../utills/movieInfo";
import MakeItem from "./MakeItem";

export default function MovieListsItem({ listType }) {
  const navigate = useNavigate();

  let movieItems = <MakeItem listType={listType} count={typeAmount}></MakeItem>;

  return (
    <>
      <div className="flex-center justy-start">
        <h3 className="typeTitle">
          {listType.replace("_", " ").toUpperCase()}
        </h3>
        <button onClick={() => navigate(`/movie/${listType}`)}>더보기</button>
      </div>
      <ul className="ulTag typeContent">{movieItems}</ul>
    </>
  );
}
