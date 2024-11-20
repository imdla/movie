import React from "react";
import { errorImgUrl } from "../utills/movieInfo";

export default function EmptyMyPage() {
  return (
    <>
      <img src={errorImgUrl} alt="" />
      <p>현재 저장한 영화가 없습니다</p>
    </>
  );
}
