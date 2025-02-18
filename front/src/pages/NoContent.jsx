import React from "react";
import { useNavigate } from "react-router-dom";
import { errorImgUrl } from "../utills/movieUtils";

export default function NoContent({ inputValue }) {
  const navigate = useNavigate();

  return (
    <div className="container flex-center notfound">
      <div>
        <img src="/src/assets/error.png" alt="" />
      </div>
      <div>
        <h1>No Content</h1>
        <p>{inputValue}에 대한 검색한 결과가 없습니다.</p>
        <button onClick={() => navigate("/")}>홈으로 이동</button>
      </div>
    </div>
  );
}
