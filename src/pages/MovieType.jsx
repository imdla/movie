import React from "react";
import { useParams } from "react-router-dom";

export default function MovieType() {
  const { listType } = useParams();

  return (
    <>
      <div>MovieType</div>
      <p>{listType}</p>
    </>
  );
}
