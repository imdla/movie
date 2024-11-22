import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import movieApi from "../api/movieApi";
import imgUrl from "../utills/imgUrl";
import { reviewBasicImgUrl } from "../utills/movieUtils";

import Loading from "../pages/Loading";

export default function MovieReviews({ count }) {
  const navigate = useNavigate();
  const { movieId } = useParams();
  const [loading, setLoading] = useState(true);
  const [movieItemReviews, setMovieItemReviews] = useState();

  useEffect(() => {
    async function getMovieByIdReview() {
      try {
        const data = await movieApi.getMovieByIdReview(movieId);
        setMovieItemReviews(data);
      } catch (err) {
        console.error(err);
        navigate("/notfound", { replace: true });
      } finally {
        setLoading(false);
      }
    }
    getMovieByIdReview();
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }

  let cnt = 0;
  const moveReviews = movieItemReviews.map((movieReview) => {
    if (cnt < count) {
      cnt += 1;
      const { id, author, content, author_details } = movieReview;

      let imgSrc = author_details.avatar_path
        ? `${imgUrl()}${author_details.avatar_path}`
        : reviewBasicImgUrl;

      return (
        <li className="ulTag marginBttom movieReview" key={id}>
          <img className="reviewImg" src={imgSrc} alt="" />

          <div className="flex-center flex-col align-start">
            <h2>{author}</h2>
            <p>{content}</p>
          </div>
        </li>
      );
    }
  });

  return (
    <>
      <h2>Movie Review</h2>
      <ul className="marginTop">{moveReviews}</ul>
    </>
  );
}
