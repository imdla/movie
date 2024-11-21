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

  // 처음에 렌더링 했을 때 로컬 스토리지 확인 후 -> store에 입력
  // 페이지 벗어나기 전에 로컬 스토리지에 저장

  // const savedMoviesLocal = JSON.parse(
  //     localStorage.getItem("saveMovieId") || "[]"
  //   );

  // useEffect(() => {
  //   function saveMoviesToLocalStorage() {
  //     if (Array.isArray(saveMovieId)) {
  //       localStorage.setItem("saveMovieId", JSON.stringify(saveMovieId));
  //     }
  //   }
  //   saveMoviesToLocalStorage();
  // }, [isSaved]);

  // 처음에 렌더링 했을 때 로컬 스토리지 확인 후 -> store에 입력
  useEffect(() => {
    const saveMoviesToGlobalState = async () => {
      if (saveMovieId.length === 0) {
        const savedMoviesLocal = JSON.parse(
          localStorage.getItem("saveMovieId") || "[]"
        );

        for (let id of savedMoviesLocal) {
          dispatch(saved(id));
        }
      }
    };
    saveMoviesToGlobalState();
  }, []);

  // // 페이지 벗어나기 전에 로컬 스토리지에 저장
  useEffect(() => {
    function saveMoviesToLocalStorage() {
      if (Array.isArray(saveMovieId)) {
        localStorage.setItem("saveMovieId", JSON.stringify(saveMovieId));
      }
    }
    saveMoviesToLocalStorage();
  }, [isSaved]);

  // useEffect(() => {
  //   const handleBeforeUnload = () => {
  //     localStorage.setItem("saveMovieId", JSON.stringify(saveMovieId));
  //   };

  //   window.addEventListener("beforeunload", handleBeforeUnload);

  //   return () => {
  //     window.removeEventListener("beforeunload", handleBeforeUnload);
  //   };
  // }, [saveMovieId]); // saveMovieId가 변경될 때마다 최신 상태를 참조

  // useEffect(() => {
  //   localStorage.setItem("saveMovieId", JSON.stringify(saveMovieId));
  // }, [saveMovieId]);

  return (
    <>
      <button onClick={() => console.log(saveMovieId)}>클릭</button>
      <button onClick={() => console.log(movieId)}>클릭</button>
      <button onClick={() => console.log(isSaved)}>클릭</button>
      <button onClick={handleClick}>{isSaved ? "저장 안함" : "저장"}</button>
    </>
  );
}
