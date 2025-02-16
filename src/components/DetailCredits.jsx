import React from "react";
import movieApi from "../api/movieApi";
import useMovieApi from "../hooks/useMovieApi";
import Loading from "../pages/Loading";
import NotFound from "../pages/NotFound";
import { imgUrl } from "../utills/imgUrl";

export default function DetailCredits({ movieId }) {
  const { data: credits, loading, error } = useMovieApi(
    movieApi.getMovieCredits,
    movieId
  );

  if (loading) {
    return <Loading></Loading>;
  }
  if (error) {
    return <NotFound></NotFound>;
  }

  const movieCredits = credits.map((person) => {
    const { id, character, name, profile_path } = person;

    return (
      <li key={id}>
        <img src={`${imgUrl}${profile_path}`} alt="" />
        <p>{character}</p>
        <p>{name}</p>
      </li>
    );
  });

  return (
    <>
      <h2>출연진</h2>
      <ul className="marginTop">{movieCredits}</ul>
    </>
  );
}
