import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { saved, remove } from "../store/slices/movieSaveSlice";
import movieApi from "../api/movieApi";
import useMovieApi from "../hooks/useMovieApi";
import { imgUrl } from "../utils/imgUrl";

import DetailReview from "../components/DetailReview";
import DetailCredits from "../components/DetailCredits";
import Loading from "./Loading";
import NotFound from "./NotFound";

export default function MovieDetail() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { movieId } = useParams();
  const [isSaved, setIsSaved] = useState();
  const { isLoggedIn } = useSelector((state) => state.auth.user);
  const { saveMovieId } = useSelector((state) => state.movieSave);

  useEffect(() => {
    let saveValue = saveMovieId.find((id) => {
      return id === movieId;
    });

    setIsSaved(isLoggedIn && saveValue ? true : false);
  }, [isSaved]);

  const { data: movieItem, loading, error } = useMovieApi(
    movieApi.getMovieById,
    movieId
  );

  const { data: movieImage, loadingImg, errorImg } = useMovieApi(
    movieApi.getMovieImage,
    movieId
  );

  if (loading || loadingImg) {
    return <Loading></Loading>;
  }
  if (error || errorImg) {
    return <NotFound></NotFound>;
  }

  const { title, backdrop_path, vote_average, overview, genres } = movieItem;
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
    <>
      <div className="flex-center flex-col movieDetail">
        <img src={`${imgUrl}${backdrop_path}`} alt="" />
        <img className="logo" src={`${imgUrl}${movieImage}`} alt="" />
        <div className="container">
          <h1>{title}</h1>
          <button onClick={handleClick}>
            {isSaved ? (
              <i className="fa-solid fa-x">
                <span> 저장 취소</span>
              </i>
            ) : (
              <i className="fa-solid fa-plus">
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

            <li></li>
          </ul>
        </div>
      </div>

      <div className="container detailCredit">
        <DetailCredits movieId={movieId} />
      </div>
      <div className="container">
        <DetailReview />
      </div>
    </>
  );
}
