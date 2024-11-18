import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import movieApi from "../api/movieApi";
import imgUrl from "../utills/imgUrl";
import MovieReviews from "./MovieReviews";

export default function MovieDetail() {
  const { movieId } = useParams();
  const [movieItem, setMovieItem] = useState();

  useEffect(() => {
    async function getMovieById() {
      try {
        const data = await movieApi.getMovieById(movieId);
        setMovieItem(data);
      } catch (err) {
        console.error(err);
      } finally {
      }
    }
    getMovieById();
  }, []);

  if (!movieItem) {
    return <div>로딩 중</div>;
  }

  const { title, vote_average, overview, poster_path, genres } = movieItem;
  const genre = genres.map((obj) => {
    return <li key={obj.id}>{obj.name}</li>;
  });

  return (
    <>
      <h2>Movie Detail</h2>
      <img src={`${imgUrl()}${poster_path}`} alt="" />
      <div>
        <h3>{title}</h3>
        <ul>
          <li>
            <p>평점 : {vote_average}</p>
          </li>
          <li>
            <p>{overview}</p>
          </li>
          <li>
            <ul>{genre}</ul>
          </li>
        </ul>
        <ul>
          <MovieReviews count={5}></MovieReviews>
        </ul>
      </div>
    </>
  );
}
