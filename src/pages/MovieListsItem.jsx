import React from "react";
import MovieItem from "../components/MovieItem";
import { useEffect, useState } from "react";
import movieApi from "../api/movieApi";

export default function MovieListsItem({ listType }) {
  const [movieList, setMovieList] = useState();

  useEffect(() => {
    async function getMovieList() {
      try {
        const data = await movieApi.getMovies(listType);
        setMovieList(data);
      } catch (err) {
        console.error(err);
      } finally {
      }
    }
    getMovieList();
  });

  if (!movieList) {
    return <div>로딩중</div>;
  }

  let count = 0;
  const movieItems = movieList.map((movieItem) => {
    if (count < 3) {
      count += 1;
      const { id, title, overview } = movieItem;

      return (
        <li key={id}>
          <MovieItem title={title} content={overview}></MovieItem>
        </li>
      );
    }
  });

  return (
    <section>
      <h3>{listType}</h3>
      <button>더보기</button>
      <ul>{movieItems}</ul>
    </section>
  );
}
