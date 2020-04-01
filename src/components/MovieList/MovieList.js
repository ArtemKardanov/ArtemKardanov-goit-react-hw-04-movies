import React from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";

const MovieList = ({ items, location }) => (
  <>
    {items.map(item => (
      <li key={item.id}>
        <Link
          to={{
            pathname: `/movies/${item.id}`,
            state: { from: location }
          }}
        >
          {item.title}
        </Link>
      </li>
    ))}
  </>
);

MovieList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired
    })
  ),
  location: PropTypes.object.isRequired
};

export default withRouter(MovieList);
