import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import movieApi from "../api/movieApi";
import imgUrl from "../utills/imgUrl";
import { reviewAmount } from "../utills/movieUtils";

import MovieReviews from "./MovieReviews";
import Loading from "./Loading";
import SaveButton from "../components/SaveButton";
import MovieDetailInfo from "../components/MovieDetailInfo";

export default function MovieDetail() {
  const navigate = useNavigate();
  const { movieId } = useParams();
  const [movieItem, setMovieItem] = useState();
  const [isSaved, setIsSaved] = useState();
  const [loading, setLoading] = useState(true);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { saveMovieId } = useSelector((state) => state.movieSave);

  useEffect(() => {
    async function getMovieById() {
      try {
        const data = await movieApi.getMovieById(movieId);
        setMovieItem(data);
      } catch (err) {
        console.error(err);
        navigate("/notfound", { replace: true });
      } finally {
        setLoading(false);
      }
    }
    getMovieById();
  }, []);

  // store 사용한 이전 코드
  // useEffect(() => {
  //   let saveValue = saveMovieId.find((id) => {
  //     return id === movieId;
  //   });

  //   setIsSaved(isLoggedIn && saveValue ? true : false);
  // }, [isSaved]);

  // 렌더링될 때 마다 로컬 스토리지통해 isSaved 값 업데이트
  useEffect(() => {
    const saveMoviesToGlobalState = async () => {
      const savedMoviesLocal = JSON.parse(
        localStorage.getItem("saveMovieId") || "[]"
      );

      let saveValue = false;
      for (let id of savedMoviesLocal) {
        if (id === movieId) {
          saveValue = true;
        }
      }

      setIsSaved(isLoggedIn && saveValue ? true : false);
    };
    saveMoviesToGlobalState();
  });

  if (loading) {
    return <Loading></Loading>;
  }

  const { title, poster_path } = movieItem;

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

          <MovieDetailInfo movieItem={movieItem}></MovieDetailInfo>
        </div>
      </div>

      <MovieReviews count={reviewAmount}></MovieReviews>
    </div>
  );
}
