import { useState } from "react";
import { useParams } from "react-router-dom";
import { typeListAmount } from "../utills/movieUtils";
import MovieItem from "../components/MovieItem";

export default function MovieType() {
  const { listType } = useParams();
  const [cnt, setCnt] = useState(typeListAmount);

  let movieItems = <MovieItem listType={listType} count={cnt}></MovieItem>;

  function handleClick() {
    setCnt(cnt + typeListAmount);
  }

  return (
    <div className="container movieType">
      <h2>{listType.replace("_", " ").toUpperCase()}</h2>
      <ul className="ulTag flex-center flex-wrap">
        {movieItems}
        <button onClick={handleClick}>더보기</button>
      </ul>
    </div>
  );
}
