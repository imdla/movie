import React, { useRef } from "react";
import movieApi from "../api/movieApi";
import useMovieApi from "../hooks/useMovieApi";

import { imgUrl } from "../utils/imgUrl";
import { reviewBasicImgUrl } from "../utils/movieUtils";
import styles from "../css/DetailCredits.module.css";

import Loading from "../pages/Loading";
import NotFound from "../pages/NotFound";

export default function DetailCredits({ movieId }) {
  const scrollRefs = useRef([]);

  const handleScroll = (direction) => {
    const scrollAmount = window.innerWidth / 2;
    const listNode = scrollRefs.current;
    console.log(scrollRefs.current);

    listNode.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const { data: credits, loading, error } = useMovieApi(
    movieApi.getMovieCredits,
    movieId
  );

  if (loading) {
    return <Loading></Loading>;
  }
  if (error) {
    return <NotFound></NotFound>;
  }

  const creditsLen = credits.length;
  const movieCredits = credits.map((person) => {
    const { id, character, name, profile_path } = person;

    const imgSrc = profile_path
      ? `${imgUrl}${profile_path}`
      : reviewBasicImgUrl;

    return (
      <li key={id}>
        <img src={`${imgSrc}`} alt="" />
        <p>{character}</p>
        <p>{name}</p>
      </li>
    );
  });

  return (
    <div className={styles.credit}>
      <h2>출연진</h2>
      <button
        className={`${styles.scrollBtn} ${styles.left}`}
        onClick={() => handleScroll("left")}
      >
        <i className="fa-solid fa-arrow-left"></i>
      </button>

      <ul ref={scrollRefs}>{movieCredits}</ul>

      <button
        className={`${styles.scrollBtn} ${styles.right}`}
        onClick={() => handleScroll("right")}
      >
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
}
