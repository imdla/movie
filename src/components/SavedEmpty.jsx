import React from "react";
import { errorImgUrl } from "../utills/movieUtils";
import { useNavigate } from "react-router-dom";

export default function EmptyMyPage() {
  const navigate = useNavigate();
  return (
    <>
      <img src={errorImgUrl} alt="" />
      <div className="flex-center flex-col">
        <p>현재 저장한 영화가 없습니다</p>
        <button onClick={() => navigate("/")}>영화 둘러보기</button>
      </div>
    </>
  );
}
