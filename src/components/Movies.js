import React from "react";
import { movies } from "../data";

function Movies() {
  const movieList = movies.map((movie) => {
    return (
      <div key={movie.title}>
        <h2>Name: {movie.title}</h2>
        <h2>Runtime: {movie.time} minutes</h2>
        <ul>
          {movie.genres.map((genre) => (
            <li key={genre}>{genre}</li>
          ))}
        </ul>
      </div>
    );
  });

  return (
    <div>
      <h1>Movies Page</h1>
      {movieList}
    </div>
  );
}

export default Movies;