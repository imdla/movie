import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import movieApi from "../api/movieApi";
import MovieItem from "./MovieItem";
import Loading from "../pages/Loading";

export default function MakeItem({ listType, count }) {
  const navigate = useNavigate();
  const [movieList, setMovieList] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getMovieList() {
      try {
        const data = await movieApi.getMovies(listType);
        setMovieList(data);
      } catch (err) {
        console.error(err);
        navigate("/notfound", { replace: true });
      } finally {
        setLoading(false);
      }
    }

    getMovieList();
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }

  let cnt = 0;
  const movieItems = movieList.map((movieItem) => {
    if (cnt < count) {
      cnt += 1;

      return (
        <li key={movieItem.id}>
          <h1 className="grade">{cnt}</h1>
          <MovieItem movieItem={movieItem}></MovieItem>
        </li>
      );
    }
  });

  return <>{movieItems}</>;
}
