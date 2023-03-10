import React from "react";
import MovieCard from "./moviecard";

const MovieList = ({ movies }) => {
  return (
    <div>
      {movies.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </div>
  );
};

export default MovieList;
