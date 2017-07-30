import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './index.css';

const List = ({ cards }) => (
  <div className="cardList">
    {Object.keys(cards).map(key => {
      const card = cards[key];
      return (<Card
        title={card.author}
        content={card.content}
        key={card.id}
        id={card.id}
      >

      </Card>);
    })}
  </div>
);

List.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string,
    content: PropTypes.string,
  })),
};

List.defaultProps = {
  cards: [],
};

export default List;
