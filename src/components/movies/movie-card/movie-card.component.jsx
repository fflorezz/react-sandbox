import React from "react";
import Stars from "../stars/stars.component";
import {
  card_container,
  text_container,
  rating_container,
} from "./movie-card.module.scss";

const MovieCard = ({ movie }) => (
  <div className={card_container}>
    <div className={rating_container}>
      <Stars rating={movie.vote_average} />
      <h3>{movie.vote_average}</h3>
    </div>
    <img
      src={
        movie.backdrop_path
          ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
          : "https://i.ytimg.com/vi/TSXXi2kvl_0/maxresdefault.jpg"
      }
      alt={movie.title}
    />
    <div className={text_container}>
      <h2>{movie.title}</h2>
      <h4>{movie.release_date.slice(0, 4)}</h4>
      <p>
        {movie.overview.length < 150
          ? movie.overview
          : `${movie.overview.slice(0, 150)}...`}
      </p>
    </div>
  </div>
);

export default MovieCard;

// popularity: 32.014
// vote_count: 11533
// video: false
// poster_path: "/vSsOo0GwXP2zDZP4EyXmHejJ3H8.jpg"
// id: 557
// adult: false
// backdrop_path: "/z2YhFuq33y1oNEwypRTB1q59geW.jpg"
// original_language: "en"
// original_title: "Spider-Man"
// genre_ids: (2)[28, 14]
// title: "Spider-Man"
// vote_average: 7.1
// overview: "After being bitten by a genetically altered spider, nerdy high school student Peter Parker is endowed with amazing powers to become the Amazing superhero known as Spider-Man."
// release_date: "2002-05-01"

// base: "https://image.tmdb.org/t/p/w300/"
