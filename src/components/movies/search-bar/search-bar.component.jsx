import React, { useState, useContext } from "react";
import axios from "axios";
import { MoviesContext } from "../../../context/movies.contex";

import { searchbar_container } from "./search-bar.module.scss";

const SearchBar = () => {
  const [movieSearch, setMovieSearch] = useState("");

  const { movies, setMovies } = useContext(MoviesContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/search/movie?",
        {
          params: {
            api_key: process.env.REACT_APP_MOVIE_API_KEY,
            query: movieSearch,
          },
        }
      );

      setMovies(response.data.results);
      console.log(response.data.results);
      setMovieSearch("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnChange = (e) => {
    setMovieSearch(e.target.value);
  };

  return (
    <div className={searchbar_container}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleOnChange}
          value={movieSearch}
          placeholder="Search for a movie"
        />
        <button>SEARCH</button>
      </form>
    </div>
  );
};

export default SearchBar;
