import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import movieApi from "../api/movieApi";
import MovieItem from "../components/MovieItem";

export default function MovieGenres() {
  const { genreId } = useParams();
  const [genreList, setGenreList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getMovieGenres() {
      try {
        const data = await movieApi.getMovieGenres(genreId);
        console.log(data);
        setGenreList(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    getMovieGenres();
  }, [genreId]);

  if (loading) {
    return <div>로딩중</div>;
  }

  const genreItems = genreList.map((genreItem) => {
    return (
      <li className="flex-center" key={genreItem.id}>
        <MovieItem movieItem={genreItem}></MovieItem>
      </li>
    );
  });

  return (
    <div className="container movieGenre">
      <h2>{genreId == 16 ? "애니메이션" : "스릴러"}</h2>
      <ul className="ulTag flex-center flex-wrap justy-around movieGenreList">
        {genreItems}
      </ul>
    </div>
  );
}
