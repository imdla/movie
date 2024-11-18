import React from "react";
import { useParams } from "react-router-dom";
import MakeItem from "../components/MakeItem";

export default function MovieType() {
  const { listType } = useParams();
  let movieItems = <MakeItem listType={listType} count={10}></MakeItem>;

  return (
    <>
      <h2>Movie Type - {listType}</h2>
      {movieItems}
    </>
  );
}
