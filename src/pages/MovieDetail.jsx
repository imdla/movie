import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import MovieReviews from "./MovieReviews";
import movieApi from "../api/movieApi";
import imgUrl from "../utills/imgUrl";

export default function MovieDetail() {
  const navigate = useNavigate();
  const { movieId } = useParams();
  const [movieItem, setMovieItem] = useState();
  const { isLoggedIn } = useSelector((state) => state.auth);

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

  function handleClick() {
    if (isLoggedIn) {
      alert("MY PAGE에 저장되었습니다.");
      navigate("/mypage");
    } else {
      alert("로그인 후 이용 가능합니다.");
    }
  }

  return (
    <>
      <h2>Movie Detail</h2>
      <img src={`${imgUrl()}${poster_path}`} alt="" />
      <div>
        <h3>{title}</h3>
        <button onClick={handleClick}>저장</button>
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
      </div>

      <h2>Movie Review</h2>
      <ul>
        <MovieReviews count={5}></MovieReviews>
      </ul>
    </>
  );
}
