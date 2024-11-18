import React from "react";
import { useParams } from "react-router-dom";

export default function MovieDetail() {
  const { movieId } = useParams();

  return (
    <>
      <h2>Movie Detail</h2>
      <h3>{movieId}</h3>
    </>
  );
}
