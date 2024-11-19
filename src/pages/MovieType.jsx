import React from "react";
import { useParams } from "react-router-dom";
import MakeItem from "../components/MakeItem";

export default function MovieType() {
  const { listType } = useParams();
  let movieItems = <MakeItem listType={listType} count={10}></MakeItem>;

  return (
    <div className="container movieType">
      <h2>Movie Type - {listType}</h2>
      <ul className="ulTag flex-center flex-wrap">{movieItems}</ul>
    </div>
  );
}
