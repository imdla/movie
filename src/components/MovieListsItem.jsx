import React from "react";
import MovieItem from "./MovieItem";

export default function MovieListsItem({ listType }) {
  return (
    <section>
      <h3>{listType}</h3>
      <ul>
        <MovieItem title="제목" content="내용"></MovieItem>
        <MovieItem title="제목" content="내용"></MovieItem>
      </ul>
    </section>
  );
}
