import React from "react";
import PropTypes from "prop-types";

const Reviews = ({ items }) => (
  <>
    {items.map(item => (
      <li key={item.id}>
        <p>{item.author}</p>
        <p>{item.content}</p>
      </li>
    ))}
  </>
);

Reviews.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired
    })
  )
};

export default Reviews;
