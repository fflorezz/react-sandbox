import React from "react";
import SearchBar from "./../search-bar/search-bar.component";
import MovieList from "../movie-list/movie-list.component";

import { page_body, container } from "./movie-page.module.scss";
import { MoviesProvider } from "./../../../context/movies.contex";

class MoviePage extends React.Component {
  componentDidMount() {
    document.body.className = page_body;
  }

  componentWillUnmount() {
    document.body.className = null;
  }

  render() {
    return (
      <MoviesProvider>
        <div className={container}>
          <h1>MOVIE PAGE</h1>
          <SearchBar />
          <MovieList />
        </div>
      </MoviesProvider>
    );
  }
}

export default MoviePage;
