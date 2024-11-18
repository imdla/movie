import React from "react";
import MovieItem from "./MovieItem";
import { useEffect, useState } from "react";
import movieApi from "../api/movieApi";

export default function MovieListsItem({ listType }) {
  const [movieList, setMovieList] = useState();

  useEffect(() => {
    async function getMovieList() {
      try {
        const data = await movieApi.getMovies({ listType });
        setMovieList(data);
      } catch (err) {
        console.log("api 에러!!!!!!!!!!!");
        console.error(err);
      } finally {
      }
    }
    getMovieList();
  });

  // const movieItems = movieList.map((movieItem) => {
  //   return (
  //     <li key={movieItem.id}>
  //       <MovieItem
  //         title={movieItem.title}
  //         content={movieItem.overview}
  //       ></MovieItem>
  //     </li>
  //   );
  // });

  return (
    <section>
      {/* <h3>{listType}</h3>
      <ul>{movieItems}</ul> */}
    </section>
  );
}
