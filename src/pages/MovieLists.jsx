import React, { useState } from "react";
import MovieListsItem from "../components/MovieListsItem";

export default function MovieLists() {
  const type = "now_playing";

  return (
    <>
      <MovieListsItem listType={type}></MovieListsItem>
    </>
  );
}
