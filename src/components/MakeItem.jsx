import React from "react";
import { useEffect, useState } from "react";
import movieApi from "../api/movieApi";
import MovieItem from "./MovieItem";

export default function MakeItem({ listType, count }) {
  const [movieList, setMovieList] = useState();

  useEffect(() => {
    async function getMovieList() {
      try {
        const data = await movieApi.getMovies(listType);
        setMovieList(data);
      } catch (err) {
        console.error(err);
        alert('요청된 페이지가 없습니다.')
      } finally {
      }
    }
    getMovieList();
  }, []);

  if (!movieList) {
    return <div>로딩 중</div>;
  }

  let cnt = 0;
  const movieItems = movieList.map((movieItem) => {
    if (cnt < count) {
      cnt += 1;

      return (
        <li key={movieItem.id}>
          <MovieItem movieItem={movieItem}></MovieItem>
        </li>
      );
    }
  });

  return <>{movieItems}</>;
}
