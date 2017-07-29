import React from 'react';
import PropTypes from 'prop-types';

const SVG = ({ id }) => (
  <svg>
    <use xlinkHref={`./sprite.svg#${id}`} />
  </svg>
);

SVG.propTypes = {
  id: PropTypes.string,
};

export default SVG;
