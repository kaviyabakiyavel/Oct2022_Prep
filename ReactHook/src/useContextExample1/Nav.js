import React, { useContext } from "react";
import {MovieContext} from "./MovieContext";

function Nav() {
  const [movies] = useContext(MovieContext);
  return (
    <nav>
      <h1>Kaviya</h1>
      <h2>Number of movies:{movies.length}</h2>
    </nav>
  );
}

export default Nav;
