import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ author, excerpt }) => (
  <div className="card">
    <div className="author">{author}</div>
    <p className="excerpt">{excerpt}</p>
  </div>
);

Card.propTypes = {
  author: PropTypes.string,
  excerpt: PropTypes.string,
};

export default Card;
