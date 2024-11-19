import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import MovieReviews from "./MovieReviews";
import movieApi from "../api/movieApi";
import imgUrl from "../utills/imgUrl";
import { useDispatch } from "react-redux";
import { saved, notSaved } from "../store/slices/movieSaveSlice";

export default function MovieDetail() {
  const [movieItem, setMovieItem] = useState();
  const [isSaved, setIsSaved] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
      } finally {
      }
    }
    getMovieById();
  }, []);

  useEffect(() => {
    let saveValue = saveMovieId.find((id) => {
      return id === movieId;
    });

    setIsSaved(saveValue ? true : false);
  }, [isSaved]);

  if (!movieItem) {
    return <div>로딩 중</div>;
  }

  const { title, vote_average, overview, poster_path, genres } = movieItem;
  const genre = genres.map((obj) => {
    return <li key={obj.id}>{obj.name}</li>;
  });

  function handleClick() {
    if (isLoggedIn) {
      // 클릭한 poster.id 가져와 movieSave의 id와 비교
      if (isSaved) {
        dispatch(notSaved());
        setIsSaved(false);
      } else {
        dispatch(saved());
        setIsSaved(true);
        alert("MY PAGE에 저장되었습니다.");
        // navigate("/mypage");
      }
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
        <button onClick={handleClick}>{isSaved ? "저장 안함" : "저장"}</button>
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
