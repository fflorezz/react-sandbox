import React, { useState, createContext, useMemo } from "react";

export const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  const value = useMemo(
    () => ({
      movies,
      setMovies,
    }),
    [movies]
  );

  return (
    <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
  );
};
