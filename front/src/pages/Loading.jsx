import React, { useState, useEffect } from "react";
import { popcornImgUrl } from "../utils/movieUtils";

export default function Loading() {
  return (
    <div className="loading flex-center">
      <img src={popcornImgUrl} alt="" />

      <div>이미지를 로딩중입니다.</div>
    </div>
  );
}
