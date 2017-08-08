import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDom from 'react-dom';
import Modal from '../../components/Modal';
import Tag from '../../components/Tag';
import './index.css';

class CreateArticleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id || '',
      author: props.author || '',
      content: props.content || '',
      published: props.published || false,
      title: props.title || '',
      tags: props.tags || [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.tags = '';
  }

  onKeyPress(event) {
    if (event.which === 13) {
      this.setState({ tags: this.state.tags.concat(event.currentTarget.value) });
      ReactDom.findDOMNode(this.tags).value = '';
    }
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState(prevState => ({ [name]: name !== 'tags' ? value : prevState.tags.concat(value) }));
  }

  render() {
    const { author, title, content, published } = this.props;
    return (
      <Modal onClose={this.props.onClose} title="New article">
        <div className="createArticleForm">
          <div className="formRow">
            <label className="labelForm">Author</label>
            <input defaultValue={author} name="author" type="text" onChange={this.handleChange} />
          </div>
          <div className="formRow">
            <label className="labelForm">Title</label>
            <input defaultValue={title} name="title" type="text" onChange={this.handleChange} />
          </div>
          <div className="formRow">
            <label className="labelForm">Content</label>
            <textarea defaultValue={content} name="content" type="text" onChange={this.handleChange} rows="5" />
          </div>
          <div className="formRow">
            <label className="published" id="published">Published</label>
            <input
              defaultChecked={published}
              className="published"
              name="published"
              type="checkbox"
              onChange={this.handleChange}
              htmlFor="published"
            />
          </div>
          <div className="formRow">
            <label className="tags">Tags</label>
            <input name="tags" type="text" onKeyPress={this.onKeyPress} ref={input => { this.tags = input; }} />
            {<div className="tagContainer">{this.state.tags.map((tag, i) => <Tag key={i}>{tag}</Tag>)}</div>}
          </div>
          <button type="button" className="btn cancel" onClick={this.props.onClose}>Cancelar</button>
          <button type="button" className="btn save" onClick={() => this.props.onSave(this.state)}>Guardar</button>
        </div>
      </Modal>
    );
  }
}

CreateArticleForm.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string,
  id: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  published: PropTypes.bool,
  tags: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
};

CreateArticleForm.defaultProps = {
  tags: [],
};

export default CreateArticleForm;
