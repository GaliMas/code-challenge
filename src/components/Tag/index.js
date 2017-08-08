import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Tag = ({ children }) => <span className="tag"><span className="tagText">{children}</span></span>;

Tag.propTypes = {
  children: PropTypes.node,
};

export default Tag;
