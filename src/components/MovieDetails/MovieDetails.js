import React from "react";

const Movie = ({ poster_path, title, overview, genres, release_date }) => (
  <>
    <article>
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" />
      <div>
        <h2>
          {title} ({release_date})
        </h2>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <ul>
          {genres.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>
    </article>
  </>
);

export default Movie;
