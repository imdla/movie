import React from "react";
import MovieItem from "../components/MovieItem";
import { useEffect, useState } from "react";
import movieApi from "../api/movieApi";
import { useNavigate } from "react-router-dom";
import MakeItem from "../components/MakeItem";

export default function MovieListsItem({ listType }) {
  const [movieList, setMovieList] = useState();
  const navigate = useNavigate();

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

  let movieItems = <MakeItem movieList={movieList} count={5}></MakeItem>;

  return (
    <>
      <h3>{listType}</h3>
      <button onClick={() => navigate(`/movie/${listType}`)}>더보기</button>
      <ul>{movieItems}</ul>
    </>
  );
}
