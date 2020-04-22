import React from "react";
import { Switch, Route, Link, useLocation } from "react-router-dom";

import MoviePage from "./components/movies/movie-page/movie-page.component";

import "./App.scss";
import Home from "./components/home/home.component";
import CssPage from "./components/css-in-js/css-page/css-page.component";

function App(props) {
  const location = useLocation();
  return (
    <div>
      {location.pathname === "/" ? null : <Link to="/">Home</Link>}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/movies" component={MoviePage} />
        <Route path="/css-page" component={CssPage} />
      </Switch>
    </div>
  );
}

export default App;
