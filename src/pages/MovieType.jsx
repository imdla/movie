import React from "react";
import { useParams } from "react-router-dom";
import MakeItem from "../components/MakeItem";
import movieApi from "../api/movieApi";
import { useEffect, useState } from "react";

export default function MovieType() {
  const { listType } = useParams();
  const [movieList, setMovieList] = useState([]);

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

  let movieItems = <MakeItem movieList={movieList} count={10}></MakeItem>;

  return (
    <>
      <h2>Movie Type - {listType}</h2>
      {movieItems}
    </>
  );
}
