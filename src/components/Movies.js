import React from "react";
import { movies } from "../data";

const movieData = movies.map((movie) => (
  <div key={movie.title}>
    <h2>{movie.title}</h2>
    <p>Runtime: {movie.time} min.</p>
    <ul>
      {movie.genres.map((genre) => (
        <li key={genre}>{genre}</li>
      ))}
    </ul>
  </div>
))

function Movies() {
  return(
    <div>
      <h1>Movies Page</h1>
      {movieData}
    </div>
  )
}

export default Movies;
