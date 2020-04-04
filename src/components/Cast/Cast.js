import React from "react";
import PropTypes from "prop-types";
import styles from "./Cast.module.css";

const Cast = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <li key={item.cast_id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
            alt={item.name}
            className={styles.img}
          />

          <p>{item.name}</p>
          <p>Character: {item.character}</p>
        </li>
      ))}
    </>
  );
};

Cast.defaultProps = {
  alt: "actorImage",
};

Cast.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      cast_id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    })
  ),
};

export default Cast;
