import React from "react";
import { actors } from "../data";

const actorData = actors.map((actor) => (
  <div key={actor.name}>
    <h2>{actor.name}</h2>
    <ul>
      {actor.movies.map((movie) => (
        <li key={movie}>{movie}</li>
      ))}
    </ul>
  </div>
))

function Actors() {
  return(
    <div>
      <h1>Actors Page</h1>
      {actorData}
    </div>
  )
}

export default Actors;
