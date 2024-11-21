import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import movieApi from "../api/movieApi";
import imgUrl from "../utills/imgUrl";
import { reviewAmount } from "../utills/movieInfo";

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

  // useEffect(() => {
  //   let saveValue = saveMovieId.find((id) => {
  //     return id === movieId;
  //   });

  //   setIsSaved(isLoggedIn && saveValue ? true : false);
  // }, [isSaved]);

  useEffect(() => {
    const savedMoviesLocal = JSON.parse(
      localStorage.getItem("saveMovieId") || "[]"
    );
    let saveValue = savedMoviesLocal.find((id) => {
      return id === movieId;
    });

    setIsSaved(isLoggedIn && saveValue ? true : false);
  }, [isSaved]);

  if (loading) {
    return <Loading></Loading>;
  }

  const { title, poster_path } = movieItem;

  return (
    <div className="container">
      <button onClick={() => console.log({ isSaved })}>클릭</button>
      
      <h2>Movie Detail</h2>
      <div className="flex-center">
        <img src={`${imgUrl()}${poster_path}`} alt="" />
        <div>
          <h3>{title}</h3>
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
