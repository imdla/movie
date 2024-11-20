import MovieListsItem from "../components/MovieListsItem";
import { movieTypeList } from "../utills/movieInfo";

export default function MovieLists() {
  const movieTypes = movieTypeList.map((type) => {
    return (
      <section className="movieList" key={type}>
        <MovieListsItem listType={type}></MovieListsItem>
      </section>
    );
  });

  return <>{movieTypes}</>;
}
