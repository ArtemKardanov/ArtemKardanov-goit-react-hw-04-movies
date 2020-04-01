import React from "react";
import PropTypes from "prop-types";

const Cast = ({ items }) => {
  return (
    <>
      {items.map(item => (
        <li key={item.cast_id}>
          <img src={`${item.poster_path}`} alt="" />
          <p>{item.name}</p>
          <p>Character: {item.character}</p>
        </li>
      ))}
    </>
  );
};

Cast.defaultProps = {
  alt: "actorImage"
};

Cast.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      cast_id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
      poster_path: PropTypes.string
    })
  )
};

export default Cast;
