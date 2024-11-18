import React from "react";
import { useEffect, useState } from "react";
import movieApi from "../api/movieApi";
import { useParams } from "react-router-dom";
import imgUrl from "../utills/imgUrl";

export default function MovieDetail() {
  const { movieId } = useParams();
  const [movieItem, setMovieItem] = useState();
  const [movieItemReviews, setMovieItemReviews] = useState();

  useEffect(() => {
    async function getMovieById() {
      try {
        const data = await movieApi.getMovieById(movieId);
        setMovieItem(data);
      } catch (err) {
        console.error(err);
      } finally {
      }
    }
    getMovieById();
  }, []);

  useEffect(() => {
    async function getMovieByIdReview() {
      try {
        const data = await movieApi.getMovieByIdReview(movieId);
        setMovieItemReviews(data);
      } catch (err) {
        console.error(err);
      } finally {
      }
    }
    getMovieByIdReview();
  }, []);

  if (!movieItem) {
    return <div>로딩 중</div>;
  }

  const { title, vote_average, overview, poster_path, genres } = movieItem;
  const genre = genres.map((obj) => {
    return <li key={obj.id}>{obj.name}</li>;
  });

  let cnt = 0;
  const moveReviews = movieItemReviews.map((movieReview) => {
    if (cnt < 5) {
      cnt += 1;
      const { author, rating, content, author_details } = movieReview;

      return (
        <li>
          {author_details.avatar_path ? (
            <img src={`${imgUrl()}${author_details.avatar_path}`} alt="" />
          ) : (
            <img
              src="https://plus.unsplash.com/premium_photo-1682309735318-934795084028?q=80&w=1824&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          )}

          <div>
            <p>{author}</p>
            <p>{rating}</p>
            <p>{content}</p>
          </div>
        </li>
      );
    }
  });

  return (
    <>
      <h2>Movie Detail</h2>
      <img src={`${imgUrl()}${poster_path}`} alt="" />
      <div>
        <h3>{title}</h3>
        <ul>
          <li>
            <p>평점 : {vote_average}</p>
          </li>
          <li>
            <p>{overview}</p>
          </li>
          <li>
            <ul>{genre}</ul>
          </li>
        </ul>
        <ul>{moveReviews}</ul>
      </div>
    </>
  );
}
