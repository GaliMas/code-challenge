import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tag from '../../components/Tag';
import './index.css';

class DetailArticle extends Component {

  componentDidMount() {
    this.props.fetchArticle(this.props.id);
  }

  render() {
    const { article } = this.props;
    return (
      <div className="detail">
        <div>author: <span className="contentDetail">{article.author}</span></div>
        <div>title: <span className="contentDetail">{article.title}</span></div>
        <div>content: <span className="contentDetail">{article.content && article.content.substring(0, 50)}</span></div>
        <div>{article.published ? 'Published' : 'Not published'}</div>
        <div>tags: {article.tags && article.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}</div>
      </div >
    );
  }
}

DetailArticle.propTypes = {
  article: PropTypes.shape({
    author: PropTypes.string,
    content: PropTypes.string,
    id: PropTypes.string,
    published: PropTypes.bool,
    tags: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
  }),
  fetchArticle: PropTypes.func,
  id: PropTypes.string,
};

DetailArticle.defaultProps = {
  article: {},
};

export default DetailArticle;
