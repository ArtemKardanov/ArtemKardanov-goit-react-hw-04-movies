import React from "react";
import PropTypes from "prop-types";

const Movie = ({ poster_path, title, overview, genres, release_date }) => (
  <>
    <article>
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
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

Movie.defaultProps = {
  alt: "poster"
};

Movie.propTypes = {
  poster_path: PropTypes.string,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })
  )
};

export default Movie;
