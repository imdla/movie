import React from "react";
import { useParams } from "react-router-dom";
import MakeItem from "../components/MakeItem";
import { typeListAmount } from "../utills/movieInfo";
import { useState } from "react";

export default function MovieType() {
  const { listType } = useParams();
  const [cnt, setCnt] = useState(typeListAmount);

  let movieItems = <MakeItem listType={listType} count={cnt}></MakeItem>;

  function handleClick() {
    setCnt(cnt + 5);
  }

  return (
    <div className="container movieType">
      <h2>Movie Type - {listType}</h2>
      <ul className="ulTag flex-center flex-wrap">
        {movieItems}
        <button onClick={handleClick}>더보기</button>
      </ul>
    </div>
  );
}
