import { useParams } from "react-router-dom";

import movieApi from "../api/movieApi";
import useMovieApi from "../hooks/useMovieApi";
import { imgUrl } from "../utils/imgUrl";
import { reviewBasicImgUrl } from "../utils/movieUtils";

import Loading from "../pages/Loading";
import NotFound from "../pages/NotFound";

import DetailReviewKr from "./DetailReviewKr";

export default function MovieReviews() {
  const { movieId } = useParams();

  const { data: movieReviewList, loading, error } = useMovieApi(
    movieApi.getMovieByIdReview,
    movieId
  );

  if (loading) {
    return <Loading></Loading>;
  }
  if (error) {
    return <NotFound></NotFound>;
  }

  const moveReviews = movieReviewList.map((movieReview) => {
    const { id, author, content, author_details } = movieReview;

    let imgSrc = author_details.avatar_path
      ? `${imgUrl}${author_details.avatar_path}`
      : reviewBasicImgUrl;

    return (
      <li
        className="ulTag flex-center justy-start marginBttom movieReview"
        key={id}
      >
        <img className="reviewImg" src={imgSrc} alt="" />

        <div className="flex-center flex-col align-start">
          <h4>
            <b>
              {author}{" "}
              <span>{"⭐".repeat(Math.round(author_details.rating / 2))}</span>
            </b>
          </h4>

          <p>{content}</p>
        </div>
      </li>
    );
  });

  return (
    <>
      <h2>후기</h2>
      {/* <DetailReviewKr /> */}
      <ul className="marginTop movieReviewUl">{moveReviews}</ul>
    </>
  );
}
