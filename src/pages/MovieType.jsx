import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  movieTypeList,
  movieTypeListKr,
  typeListAmount,
} from "../utills/movieUtils";
import MovieItem from "../components/MovieListItem";

export default function MovieType() {
  const { listType } = useParams();
  const [cnt, setCnt] = useState(typeListAmount);

  const index = movieTypeList.indexOf(listType);
  const movieTitle = movieTypeListKr[index];
  const movieItems = <MovieItem listType={listType} count={cnt}></MovieItem>;

  function handleClick() {
    setCnt(cnt + typeListAmount);
  }

  return (
    <div className="container movieType">
      <h2>{movieTitle}</h2>
      <ul className="ulTag flex-center flex-wrap">
        <div className="flex-center flex-wrap">{movieItems}</div>
        <button onClick={handleClick}>더보기</button>
      </ul>
    </div>
  );
}
