import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import movieApi from "../api/movieApi";
import useMovieApi from "../hooks/useMovieApi";
import imgUrl from "../utills/imgUrl";

import DetailReview from "../components/DetailReview";
import SaveButton from "../components/SaveButton";
import Loading from "./Loading";
import NotFound from "./NotFound";

export default function MovieDetail() {
  const { movieId } = useParams();
  const [isSaved, setIsSaved] = useState();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { saveMovieId } = useSelector((state) => state.movieSave);

  const {
    data: movieItem,
    loading,
    error,
  } = useMovieApi(movieApi.getMovieById, movieId);

  // store 사용한 이전 코드
  useEffect(() => {
    let saveValue = saveMovieId.find((id) => {
      return id === movieId;
    });

    setIsSaved(isLoggedIn && saveValue ? true : false);
  }, [isSaved]);

  // 렌더링될 때 마다 로컬 스토리지통해 isSaved 값 업데이트
  // useEffect(() => {
  //   const saveMoviesToGlobalState = async () => {
  //     const savedMoviesLocal = JSON.parse(
  //       localStorage.getItem("saveMovieId") || "[]"
  //     );

  //     let saveValue = false;
  //     for (let id of savedMoviesLocal) {
  //       if (id === movieId) {
  //         saveValue = true;
  //       }
  //     }

  //     setIsSaved(isLoggedIn && saveValue ? true : false);
  //   };
  //   saveMoviesToGlobalState();
  // });

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

  return (
    <div className="container">
      <h2>Movie Detail</h2>
      <div className="flex-center movieDetail">
        <img src={`${imgUrl()}${poster_path}`} alt="" />

        <div>
          <h1>{title}</h1>
          <SaveButton
            isSaved={isSaved}
            setIsSaved={setIsSaved}
            movieId={movieId}
          ></SaveButton>

          <ul>
            <li className="flex-center justy-start ">
              <p>
                <b>평균</b> {vote_average}
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
