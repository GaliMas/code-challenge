import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CardList } from '../../components/Card';
import CreateArticleForm from '../CreateArticleForm';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
    this.onCreateArticle = this.onCreateArticle.bind(this);
    this.toogleModal = this.toogleModal.bind(this);
  }

  componentDidMount() {
    this.props.fetchArticles();
  }

  onCreateArticle(article) {
    this.props.createArticle(article);
    this.toogleModal();
  }

  toogleModal() {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
  }

  render() {
    return (
      <div>
        <button
          className="btn btnAdd"
          onClick={this.toogleModal}
        >+</button>
        <CardList cards={this.props.articles} />
        {this.state.isModalOpen &&
          <CreateArticleForm
            onClose={this.toogleModal}
            onSave={this.onCreateArticle}
            onFieldChange={this.handleChange}
          />
        }
      </div>
    );
  }
}

Home.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string,
    content: PropTypes.string,
  })),
  createArticle: PropTypes.func.isRequired,
  fetchArticles: PropTypes.func.isRequired,
};

export default Home;
