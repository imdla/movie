import MovieListsItem from "../components/MovieListsItem";

export default function MovieLists() {
  const types = ["now_playing", "popular", "top_rated"];

  const movieTypes = types.map((type) => {
    return (
      <>
        <MovieListsItem listType={type}></MovieListsItem>
      </>
    );
  });

  const type = "now_playing";

  return <>{movieTypes}</>;
}
