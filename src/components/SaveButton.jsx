import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { saved, remove } from "../store/slices/movieSaveSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SaveButton({ isSaved, setIsSaved, movieId }) {
  const navigate = useNavigate();
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
      if (window.confirm("로그인 후 이용 가능합니다. 로그인 하시겠습니까?")) {
        navigate("/login");
      }
    }
  }

  return (
    <>
      <button onClick={handleClick}>{isSaved ? "저장 취소" : "저장"}</button>
    </>
  );
}
