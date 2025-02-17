import React from "react";
import movieApi from "../api/movieApi";
import useMovieApi from "../hooks/useMovieApi";
import { imgUrl } from "../utills/imgUrl";
import { reviewBasicImgUrl } from "../utills/movieUtils";
import style from "../css/DetailCredits.module.css";

import Loading from "../pages/Loading";
import NotFound from "../pages/NotFound";

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

      const imgSrc = profile_path
        ? `${imgUrl}${profile_path}`
        : reviewBasicImgUrl;

      return (
        <li key={id}>
          <img src={`${imgSrc}`} alt="" />
          <p>{character}</p>
          <p>{name}</p>
        </li>
      );
  });

  return (
    <div className={style.credit}>
      <h2>출연진</h2>
      <ul className="marginTop flex-center justy-start">{movieCredits}</ul>
    </div>
  );
}
