import { Link, useParams } from "react-router-dom";

import movieApi from "../api/movieApi";
import useMovieApi from "../hooks/useMovieApi";
import { genreTransWord } from "../utils/movieUtils";
import { imgUrl } from "../utils/imgUrl";

import Loading from "./Loading";
import NotFound from "./NotFound";

export default function MovieGenre() {
  const { genreId } = useParams();
  const { data: genreList, loading, error } = useMovieApi(
    movieApi.getMovieGenres,
    genreId
  );

  if (loading) {
    return <Loading></Loading>;
  }
  if (error) {
    return <NotFound></NotFound>;
  }

  const genreItems = genreList.map((genreItem) => {
    const { id, poster_path } = genreItem;
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
      <h2>{genreId == 16 ? genreTransWord[0] : genreTransWord[1]}</h2>
      <ul className="ulTag flex-center flex-wrap justy-around movieGenreList">
        {genreItems}
      </ul>
    </div>
  );
}
