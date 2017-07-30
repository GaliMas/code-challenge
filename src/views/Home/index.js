import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CardList } from '../../components/Card';

class Home extends Component {

  componentDidMount() {
    this.props.fetchArticles();
  }

  render() {
    return (
      <CardList cards={this.props.articles} />
    );
  }
}

Home.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string,
    content: PropTypes.string,
  })),
  fetchArticles: PropTypes.func,
};

export default Home;
