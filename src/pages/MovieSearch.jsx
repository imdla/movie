import { Link, useParams } from "react-router-dom";

import movieApi from "../api/movieApi";
import useMovieApi from "../hooks/useMovieApi";
import { imgUrl } from "../utills/imgUrl";

import Loading from "./Loading";
import NotFound from "./NotFound";
import NoContent from "./NoContent";

export default function MovieSearch() {
  const { inputValue } = useParams();
  const { data: searchList, loading, error } = useMovieApi(
    movieApi.getMovieSerachByInputValue,
    inputValue
  );

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <NotFound />;
  }

  if (searchList.length == 0) {
    return <NoContent inputValue={inputValue} />;
  }

  const searchItems = searchList.map((item) => {
    const { id, poster_path } = item;
    return (
      <li className="flex-center" key={id}>
        <Link to={`/movie/detail/${id}`}>
          <img src={`${imgUrl}${poster_path}`} alt="" />
        </Link>
      </li>
    );
  });

  return (
    <div className="container movieGenre">
      <h2>{inputValue}</h2>
      <ul className="ulTag flex-center flex-wrap justy-around movieGenreList">
        {searchItems}
      </ul>
    </div>
  );
}
