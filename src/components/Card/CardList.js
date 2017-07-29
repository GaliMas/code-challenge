import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './index.css';

const List = ({ cards }) => (
  <div className="cardList">
    {cards.map(card => <Card key={card.id} author={card.author} excerpt={card.excerpt} />)}
  </div>
);

List.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string,
    excerpt: PropTypes.string,
  })),
};

List.defaultProps = {
  cards: [],
};

export default List;
