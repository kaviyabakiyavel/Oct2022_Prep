import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";
import { Movie } from "./Movie";

const MoveList = () => {
  debugger;
  const [movies, setMovie] = useContext(MovieContext);
  console.log("movies",movies)
  return (
    <div>
      {movies.map((movie) => (
        <Movie
          key={movie.name}
          name={movie.name}
          id={movie.id}
          price={movie.price}
        />
      ))}
    </div>
  );
};

export default MoveList;
