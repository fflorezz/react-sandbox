import React from "react";
import SearchBar from "./../search-bar/search-bar.component";
import MovieList from "../movie-list/movie-list.component";

import { page_container } from "./movie-page.module.scss";

const MoviePage = () => (
  <div className={page_container}>
    <h1>MOVIE PAGE</h1>
    <SearchBar />
    <MovieList />
  </div>
);

export default MoviePage;
