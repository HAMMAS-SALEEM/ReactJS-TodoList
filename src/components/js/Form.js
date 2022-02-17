import React from 'react';
import PropTypes from 'prop-types';
import '../css/Homepage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default function Form(props) {
  const { handleChange, handleSubmit } = props;
  return (
    <form id="form" onSubmit={handleSubmit}>
      <input className="todo-input-box" type="text" placeholder="Insert a todo..." onChange={handleChange} />
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
