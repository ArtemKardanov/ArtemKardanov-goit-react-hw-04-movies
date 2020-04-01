import React from "react";
import PropTypes from "prop-types";

const ErrorNotification = text => (
  <>
    <h1>{text}</h1>
  </>
);

ErrorNotification.propTypes = {
  text: PropTypes.string.isRequired
};

export default ErrorNotification;
