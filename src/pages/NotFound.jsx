import React from "react";
import { useNavigate } from "react-router-dom";
import { errorImgUrl } from "../utills/movieInfo";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="container flex-center notfound">
      <div>
        <img src={errorImgUrl} alt="" />
      </div>
      <div>
        <h1>Not Found</h1>
        <p>요청한 페이지를 찾을 수 없습니다.</p>
        <button onClick={() => navigate("/")}>홈으로 이동</button>
      </div>
    </div>
  );
}
