import React, { useRef } from "react";
import { Link } from "react-router-dom";
import styles from "../css/MovieSlide.Module.css";

import useMovieApi from "../hooks/useMovieApi";
import movieApi from "../api/movieApi";
import { imgUrl } from "../utils/imgUrl";

import Loading from "../pages/Loading";
import NotFound from "../pages/NotFound";

export default function MovieMain() {
  const scrollRefs = useRef([]);

  const handleScroll = (direction) => {
    const scrollAmount = window.innerWidth;
    const listNode = scrollRefs.current;

    listNode.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const listType = "popular";
  const { data: movieList, loading, error } = useMovieApi(
    movieApi.getMovies,
    listType
  );

  if (loading) {
    return <Loading></Loading>;
  }
  if (error) {
    return <NotFound></NotFound>;
  }

  let cnt = 0;
  const movieItems = movieList.map((movieItem) => {
    if (cnt < 5) {
      cnt += 1;
      const {
        id,
        release_date,
        vote_average,
        title,
        overview,
        backdrop_path,
      } = movieItem;

      return (
        <li key={movieItem.id}>
          <Link to={`/movie/detail/${id}`}>
            <div className={styles.content}>
              <div className={styles.detail}>
                <p>{release_date.slice(0, 4)}년</p>
                <p>{"⭐".repeat(Math.round(vote_average / 2))}</p>
              </div>
              <h1 className={styles.title}>{title}</h1>
              <p>{overview}</p>
            </div>
            <img src={`${imgUrl}${backdrop_path}`} alt="" />
          </Link>
        </li>
      );
    }
  });

  return (
    <div className={styles.movieSlide}>
      <button
        className={`${styles.scrollBtn} ${styles.left}`}
        onClick={() => handleScroll("left")}
      >
        <i className="fa-solid fa-arrow-left"></i>
      </button>

      <ul ref={scrollRefs}>{movieItems}</ul>

      <button
        className={`${styles.scrollBtn} ${styles.right}`}
        onClick={() => handleScroll("right")}
      >
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
}
