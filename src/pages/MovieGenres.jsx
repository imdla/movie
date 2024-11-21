import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import movieApi from "../api/movieApi";

export default function MovieGenres() {
  const [genreList, setGenreList] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getMovieGenres() {
      try {
        const data = await movieApi.getMovieGenres();
        setGenreList(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    getMovieGenres();
  }, []);

  if (loading) {
    return <div>로딩중</div>;
  }

  return <div>{genreList}</div>;
}
