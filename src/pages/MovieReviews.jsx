import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import movieApi from "../api/movieApi";
import imgUrl from "../utills/imgUrl";
import { reviewBasicImgUrl } from "../utills/movieInfo";

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
      const { id, author, content, author_details } = movieReview;

      return (
        <li className="ulTag marginBttom" key={id}>
          {author_details.avatar_path ? (
            <img
              className="reviewImg"
              src={`${imgUrl()}${author_details.avatar_path}`}
              alt=""
            />
          ) : (
            <img className="reviewImg" src={reviewBasicImgUrl} alt="" />
          )}

          <div>
            <h3>{author}</h3>
            <p>{content}</p>
          </div>
        </li>
      );
    }
  });

  return <ul className="marginTop">{moveReviews}</ul>;
}
