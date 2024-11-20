import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { saved, remove } from "../store/slices/movieSaveSlice";

export default function SaveButton({ isSaved, setIsSaved, movieId }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [isSaved, setIsSaved] = useState();
  const { isLoggedIn } = useSelector((state) => state.auth);

  function handleClick() {
    if (isLoggedIn) {
      if (isSaved) {
        dispatch(remove(movieId));
        setIsSaved(false);
      } else {
        dispatch(saved(movieId));
        setIsSaved(true);
        alert("MY PAGE에 저장되었습니다.");
        navigate("/mypage");
      }
    } else {
      alert("로그인 후 이용 가능합니다.");
    }
  }

  return (
    <button onClick={handleClick}>{isSaved ? "저장 안함" : "저장"}</button>
  );
}
