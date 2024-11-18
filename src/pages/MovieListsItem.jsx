import React from "react";
import MovieItem from "../components/MovieItem";
import { useEffect, useState } from "react";
import movieApi from "../api/movieApi";
import { Link } from "react-router-dom";

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
      const { id, title, overview, poster_path } = movieItem;

      return (
        <li key={id}>
          <MovieItem
            title={title}
            content={overview}
            poster_path={poster_path}
          ></MovieItem>
        </li>
      );
    }
  });

  function handleClick() {
    return <Link to={`/movie/${listType}`} />;
  }

  return (
    <>
      <h3>{listType}</h3>
      <button onClick={handleClick}>더보기</button>
      <ul>{movieItems}</ul>
    </>
  );
}
