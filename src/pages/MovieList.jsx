import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { movieTypeList } from "../utills/movieUtils";
import { typeAmount } from "../utills/movieUtils";

import MovieItem from "../components/MovieListItem";

export default function MovieLists() {
  const navigate = useNavigate();

  const scrollRefs = useRef([]);

  const handleScroll = (index, direction) => {
    const scrollAmount = 600;
    if (scrollRefs.current[index]) {
      scrollRefs.current[index].scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth", // 부드럽게 스크롤
      });
    }
  };

  const movieTypes = movieTypeList.map((type, index) => {
    return (
      <div className="movieList container" key={type}>
        <>
          <div className="flex-center justy-start">
            <h3 className="typeTitle">
              {type.replace("_", " ").toUpperCase()}
            </h3>
            <button onClick={() => navigate(`/movie/${type}`)}>더보기</button>
          </div>
        </>

        <>
          <div className="scroll-wrapper">
            <button
              className="scroll-btn left"
              onClick={() => handleScroll(index, "left")}
            >
              <i class="fa-solid fa-arrow-left"></i>
            </button>
            <div
              className="scroll-container"
              ref={(el) => (scrollRefs.current[index] = el)}
            >
              <ul className="ulTag typeContent">
                <MovieItem listType={type} count={typeAmount}></MovieItem>
              </ul>
            </div>
            <button
              className="scroll-btn right"
              onClick={() => handleScroll(index, "right")}
            >
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </>
      </div>
    );
  });

  return <>{movieTypes}</>;
}
