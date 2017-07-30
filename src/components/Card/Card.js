import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Card = ({ content, id, title }) => (
  <NavLink className="card" to={`/${id}`}>
    <div className="cardTitle">{title}</div>
    <p className="cardContent">{content}</p>
  </NavLink>
);

Card.propTypes = {
  content: PropTypes.node,
  id: PropTypes.string,
  title: PropTypes.node,
};

export default Card;
