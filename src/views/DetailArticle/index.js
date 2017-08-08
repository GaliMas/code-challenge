import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tag from '../../components/Tag';
import CreateArticleForm from '../CreateArticleForm';
import RemoveArticleForm from '../RemoveArticleForm';
import './index.css';

class DetailArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      isEditMode: false,
      isRemoveMode: false,
    };
    this.onSave = this.onSave.bind(this);
    this.removeArticle = this.removeArticle.bind(this);
    this.toogleRemoveModal = this.toogleRemoveModal.bind(this);
    this.toogleEditModal = this.toogleEditModal.bind(this);
  }

  componentDidMount() {
    this.props.fetchArticle(this.props.id);
  }

  onSave(values) {
    if (this.state.isEditMode) {
      this.props.updateArticle(values);
    } else {
      this.props.createArticle(values);
    }
    this.toogleEditModal();
  }

  toogleEditModal() {
    this.setState(prevState => ({ isEditMode: !prevState.isEditMode }));
  }

  toogleRemoveModal() {
    this.setState(prevState => ({ isRemoveMode: !prevState.isRemoveMode }));
  }

  removeArticle() {
    this.props.removeArticle(this.props.article.id);
    this.toogleRemoveModal();
  }

  render() {
    const { id, author, title, content, published, tags } = this.props.article;
    return (
      <div className="detailArticle">
        <div className="detailRow">
          <span className="labelDetailArticle">Author: </span>
          <span className="contentDetail">{author}</span>
        </div>
        <div className="detailRow">
          <span className="labelDetailArticle">Title: </span>
          <span className="contentDetail">{title}</span>
        </div>
        <div className="detailRow">
          <span className="labelDetailArticle">Content: </span>
          <span className="contentDetail">{content}</span>
        </div>
        <span className="labelDetailArticle">{published ? 'Published' : 'Not published'}</span>
        <div className="detailRow">
          <span className="labelDetailArticle">Tags:</span>
          {tags && tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
        </div>
        {this.state.isEditMode &&
          <CreateArticleForm
            onClose={this.toogleEditModal}
            onSave={this.onSave}
            id={id}
            author={author}
            title={title}
            content={content}
            published={published}
            tags={tags}
          />}
        {this.state.isRemoveMode
          && <RemoveArticleForm
            onClose={this.toogleRemoveModal}
            onRemove={this.removeArticle}
          />
        }
        <div className="detailButtons">
          <button
            className="btn btnEdit"
            onClick={this.toogleEditModal}
          >edit</button>
          <button
            className="btn btnRemove"
            onClick={this.toogleRemoveModal}
          >remove</button>
        </div>
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
  createArticle: PropTypes.func.isRequired,
  fetchArticle: PropTypes.func.isRequired,
  id: PropTypes.string,
  removeArticle: PropTypes.func.isRequired,
  updateArticle: PropTypes.func.isRequired,
};

DetailArticle.defaultProps = {
  article: {},
};

export default DetailArticle;
