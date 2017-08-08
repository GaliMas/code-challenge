import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Modal from '../../components/Modal';
import './index.css';

const RemoveArticleForm = ({ onClose, onRemove }) => (
  <Modal onClose={onClose} title="Remove article" className="removeModal">
    <div className="content">¿Está seguro?</div>
    <button type="button" className="btn cancel" onClick={onClose}>Cancelar</button>
    <NavLink to="/" type="button" className="btn btnRemoveModal" onClick={onRemove}>Borrar</NavLink>
  </Modal>
);

RemoveArticleForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default RemoveArticleForm;
