import React from 'react';
import PropTypes from 'prop-types';
import '../css/Homepage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default function Form({ handleChange, handleSubmit }) {
  return (
    <form id="form" onSubmit={handleSubmit}>
      <input className="todo-input-box" type="text" placeholder="Insert a todo..." onChange={handleChange} required />
      <button type="submit" className="submit-todo-button-container">
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </form>
  );
}

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
