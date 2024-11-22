import { useParams, useNavigate } from "react-router-dom";

import movieApi from "../api/movieApi";
import useMovieApi from "../hooks/useMovieApi";
import imgUrl from "../utills/imgUrl";
import { reviewBasicImgUrl } from "../utills/movieUtils";

import Loading from "../pages/Loading";
import NotFound from "../pages/NotFound";

export default function MovieReviews() {
  const { movieId } = useParams();

  const {
    data: movieReviewList,
    loading,
    error,
  } = useMovieApi(movieApi.getMovieByIdReview, movieId);

  if (loading) {
    return <Loading></Loading>;
  }
  if (error) {
    return <NotFound></NotFound>;
  }

  const moveReviews = movieReviewList.map((movieReview) => {
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
  });

  return (
    <>
      <h2>Movie Review</h2>
      <ul className="marginTop">{moveReviews}</ul>
    </>
  );
}
