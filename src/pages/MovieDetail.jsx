import React from "react";
import { useEffect, useState } from "react";
import movieApi from "../api/movieApi";
import { useParams } from "react-router-dom";
import imgUrl from "../utills/imgUrl";

export default function MovieDetail() {
  const { movieId } = useParams();
  const [movieItem, setMovieItem] = useState();

  useEffect(() => {
    async function getMovieList() {
      try {
        const data = await movieApi.getMovieById(movieId);
        setMovieItem(data);
      } catch (err) {
        console.error(err);
      } finally {
      }
    }
    getMovieList();
  }, []);

  if (!movieItem) {
    return <div>로딩 중</div>;
  }

  const { title, vote_average, overview, poster_path } = movieItem;

  return (
    <>
      <h2>Movie Detail</h2>
      <h3>{movieId}</h3>
      <p>{title}</p>
      <p>{vote_average}</p>
      <p>{overview}</p>
      <img src={`${imgUrl()}${poster_path}`} alt="" />
    </>
  );
}
