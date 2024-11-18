import MovieListsItem from "./MovieListsItem";

export default function MovieLists() {
  const types = ["now_playing", "popular", "top_rated"];

  const movieTypes = types.map((type) => {
    return (
      <section key={type}>
        <MovieListsItem listType={type}></MovieListsItem>
      </section>
    );
  });

  const type = "now_playing";

  return <>{movieTypes}</>;
}
