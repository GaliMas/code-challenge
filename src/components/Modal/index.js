import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Modal = ({ children, className, onClose, title }) => (
  <div id="myModal" className={`modal ${className}`} >
    <div className="modal-content">
      <header className="modalTitle">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{title}</h2>
      </header>
      {children}
    </div>
  </div >
);

Modal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClose: PropTypes.func,
  title: PropTypes.string,
};

export default Modal;
