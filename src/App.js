import React from "react";
import "./App.css";
// import Prueba01 from "./components/scss-component/prueba-01.compoent";
// import CardStyled from "./components/styled-components/card-styled";
// import CardCssModules from "./components/css-modules/card-css-modules.component";
// import CardEmotion from "./components/emotion/card-emotion";
// import Stars from "./components/stars/stars.component";
import { MoviesProvider } from "./context/movies.contex";
import MoviePage from "./components/movies/movie-page/movie-page.component";

function App() {
  return (
    <MoviesProvider>
      <MoviePage />
    </MoviesProvider>
  );
}

export default App;
