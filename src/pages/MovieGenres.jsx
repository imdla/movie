import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import movieApi from "../api/movieApi";
import MovieItem from "../components/MovieItem";
import { useParams } from "react-router-dom";

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
    <>
      <ul className="ulTag typeContent">{genreItems}</ul>
    </>
  );
}
