import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { saved, remove } from "../store/slices/movieSaveSlice";
import movieApi from "../api/movieApi";
import useMovieApi from "../hooks/useMovieApi";
import imgUrl from "../utills/imgUrl";

import DetailReview from "../components/DetailReview";
import Loading from "./Loading";
import NotFound from "./NotFound";

export default function MovieDetail() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { movieId } = useParams();
  const [isSaved, setIsSaved] = useState();
  const { isLoggedIn } = useSelector((state) => state.auth.user);
  const { saveMovieId } = useSelector((state) => state.movieSave);

  const {
    data: movieItem,
    loading,
    error,
  } = useMovieApi(movieApi.getMovieById, movieId);

  useEffect(() => {
    let saveValue = saveMovieId.find((id) => {
      return id === movieId;
    });

    setIsSaved(isLoggedIn && saveValue ? true : false);
  }, [isSaved]);

  if (loading) {
    return <Loading></Loading>;
  }
  if (error) {
    return <NotFound></NotFound>;
  }

  const { title, poster_path, vote_average, overview, genres } = movieItem;
  const genreItem = genres.map((genre) => {
    return <li key={genre.id}>{genre.name}</li>;
  });

  function handleClick() {
    if (isLoggedIn) {
      if (isSaved) {
        dispatch(remove(movieId));
        setIsSaved(false);
      } else {
        dispatch(saved(movieId));
        setIsSaved(true);
        alert("MY PAGE에 저장되었습니다.");
        console.log(saveMovieId);
      }
    } else {
      if (window.confirm("로그인 후 이용 가능합니다. 로그인 하시겠습니까?")) {
        navigate("/login");
      }
    }
  }
  return (
    <div className="container">
      <h2>Movie Detail</h2>
      <div className="flex-center movieDetail">
        <img src={`${imgUrl()}${poster_path}`} alt="" />
        <div>
          <h1>{title}</h1>
          <button onClick={handleClick}>
            {isSaved ? (
              <i class="fa-solid fa-x">
                <span> 저장 취소</span>
              </i>
            ) : (
              <i class="fa-solid fa-plus">
                {" "}
                <span> 저장</span>
              </i>
            )}
          </button>

          <ul>
            <li className="flex-center justy-start ">
              <p>
                평균 <b>{Math.round(vote_average * 100) / 100}</b>
              </p>
              <ul className="ulTag detailGenre">{genreItem}</ul>
            </li>

            <li className="ulTag gray">
              <p>{overview}</p>
            </li>
          </ul>
        </div>
      </div>

      <DetailReview></DetailReview>
    </div>
  );
}
