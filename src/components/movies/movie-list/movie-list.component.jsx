import React, { useContext } from "react";
import MovieCard from "../movie-card/movie-card.component";

import { list_container } from "./movie-list.module.scss";
import { MoviesContext } from "./../../../context/movies.contex";

const MovieList = () => {
  const { movies } = useContext(MoviesContext);
  return (
    <div className={list_container}>
      {movies.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
