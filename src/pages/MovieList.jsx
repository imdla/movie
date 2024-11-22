import { useNavigate } from "react-router-dom";
import { movieTypeList } from "../utills/movieInfo";
import { typeAmount } from "../utills/movieInfo";

import MakeItem from "../components/MovieItem";

export default function MovieLists() {
  const navigate = useNavigate();

  const movieTypes = movieTypeList.map((type) => {
    return (
      <div className="movieList container" key={type}>
        <div className="flex-center justy-start">
          <h3 className="typeTitle">{type.replace("_", " ").toUpperCase()}</h3>
          <button onClick={() => navigate(`/movie/${type}`)}>더보기</button>
        </div>

        <ul className="ulTag typeContent">
          <MakeItem listType={type} count={typeAmount}></MakeItem>;
        </ul>
      </div>
    );
  });

  return <>{movieTypes}</>;
}
