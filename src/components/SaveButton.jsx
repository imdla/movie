import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { saved, remove } from "../store/slices/movieSaveSlice";
import { useEffect } from "react";

export default function SaveButton({ isSaved, setIsSaved, movieId }) {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { saveMovieId } = useSelector((state) => state.movieSave);

  function handleClick() {
    if (isLoggedIn) {
      if (isSaved) {
        dispatch(remove(movieId));
        setIsSaved(false);
      } else {
        dispatch(saved(movieId));
        setIsSaved(true);
        alert("MY PAGE에 저장되었습니다.");
      }
    } else {
      alert("로그인 후 이용 가능합니다.");
    }
  }

  // useEffect(() => {
  //   function saveMoviesToLocalStorage() {
  //     if (Array.isArray(saveMovieId)) {
  //       localStorage.setItem("saveMovieId", JSON.stringify(saveMovieId));
  //     }
  //   }
  //   saveMoviesToLocalStorage();
  // }, [saveMovieId]);

  useEffect(() => {
    if (isSaved) {
      localStorage.setItem("saveMovieId", JSON.stringify(saveMovieId));
    } else {
      localStorage.setItem("saveMovieId", JSON.stringify(saveMovieId));
    }
  }, [isSaved]);

  return (
    <button onClick={handleClick}>{isSaved ? "저장 안함" : "저장"}</button>
  );
}
