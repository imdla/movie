import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { saved, remove } from "../store/slices/movieSaveSlice";
import MovieReviews from "./MovieReviews";
import Loading from "./Loading";
import movieApi from "../api/movieApi";
import imgUrl from "../utills/imgUrl";
import { reviewAmount } from "../utills/movieInfo";
import SaveButton from "../components/SaveButton";

export default function MovieDetail() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [movieItem, setMovieItem] = useState();
  const [isSaved, setIsSaved] = useState();
  const [loading, setLoading] = useState(true);
  const { movieId } = useParams();
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

  useEffect(() => {
    let saveValue = saveMovieId.find((id) => {
      return id === movieId;
    });

    setIsSaved(isLoggedIn && saveValue ? true : false);
  }, [isSaved]);

  if (loading) {
    return <Loading></Loading>;
  }

  const { title, vote_average, overview, poster_path, genres } = movieItem;
  const genreItem = genres.map((genre) => {
    return <li key={genre.id}>{genre.name}</li>;
  });

  return (
    <div className="container">
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
          <ul>
            <li>
              <p>
                <b>Vote</b> : {vote_average}
              </p>
            </li>
            <li>
              <p>
                <b>Overview</b>
              </p>
              <p>{overview}</p>
            </li>
            <li>
              <p>
                <b>Genre</b>
              </p>
              <ul>{genreItem}</ul>
            </li>
          </ul>
        </div>
      </div>

      <h2>Movie Review</h2>
      <ul>
        <MovieReviews count={reviewAmount}></MovieReviews>
      </ul>
    </div>
  );
}
