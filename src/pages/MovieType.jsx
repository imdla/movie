import React from "react";
import { useParams } from "react-router-dom";

export default function MovieType() {
  const { listType } = useParams();

  return (
    <>
      <h2>Movie Type - {listType}</h2>
      
    </>
  );
}
