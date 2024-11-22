import MovieListsItem from "../components/MovieListsItem";
import { movieTypeList } from "../utills/movieInfo";

export default function MovieLists() {
  const movieTypes = movieTypeList.map((type) => {
    return (
      <div className="movieList container" key={type}>
        <MovieListsItem listType={type}></MovieListsItem>
      </div>
    );
  });

  return <>{movieTypes}</>;
}
