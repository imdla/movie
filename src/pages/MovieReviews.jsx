import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import movieApi from "../api/movieApi";
import imgUrl from "../utills/imgUrl";

export default function MovieReviews({ count }) {
  const { movieId } = useParams();
  const [movieItemReviews, setMovieItemReviews] = useState();

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

  if (!movieItemReviews) {
    return <div>로딩 중</div>;
  }

  let cnt = 0;
  const moveReviews = movieItemReviews.map((movieReview) => {
    if (cnt < count) {
      cnt += 1;
      const { id, author, rating, content, author_details } = movieReview;

      return (
        <li className="ulTag marginBttom" key={id}>
          {author_details.avatar_path ? (
            <img
              className="reviewImg"
              src={`${imgUrl()}${author_details.avatar_path}`}
              alt=""
            />
          ) : (
            <img
              className="reviewImg"
              src="https://plus.unsplash.com/premium_photo-1682309735318-934795084028?q=80&w=1824&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          )}

          <div>
            <h3>{author}</h3>
            <p>{rating}</p>
            <p>{content}</p>
          </div>
        </li>
      );
    }
  });

  return <ul className="marginTop">{moveReviews}</ul>;
}
