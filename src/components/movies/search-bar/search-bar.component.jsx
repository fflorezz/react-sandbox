import React, { useState } from "react";
import axios from "axios";

const SearchBar = () => {
  const [movieSearch, setMovieSearch] = useState("");
  const [movies, setMovies] = useState([]);

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
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnChange = (e) => {
    setMovieSearch(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleOnChange} />
        <button>Search</button>
      </form>
      {movies.map((movie) => (
        <h2>{movie.title}</h2>
      ))}
    </div>
  );
};

export default SearchBar;
