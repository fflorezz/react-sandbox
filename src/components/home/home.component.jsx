import React from "react";

import { Link } from "react-router-dom";

import { page_container } from "./home.module.scss";

function Home() {
  return (
    <div className={page_container}>
      <nav>
        <ul>
          <li>
            <Link to="/movies">MOVIES APP</Link>
          </li>
          <li>
            <Link to="/css-page">CSS IN JS</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
