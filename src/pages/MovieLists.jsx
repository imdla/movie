import MovieListsItem from "../components/MovieListsItem";
import { movieTypeList } from "../utills/movieInfo";

export default function MovieLists() {
  function handleClick(e) {
    checkOverflow(div1, log1);
  }

  const movieTypes = movieTypeList.map((type) => {
    return (
      <div className="movieList" key={type}>
        <MovieListsItem listType={type}></MovieListsItem>
      </div>
    );
  });

  return <>{movieTypes}</>;
}
