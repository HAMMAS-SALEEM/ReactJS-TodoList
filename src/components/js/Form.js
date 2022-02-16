import React from 'react';
import '../css/Homepage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default function Form() {
  return (
    <form id="form">
      <input className="todo-input-box" type="text" placeholder="Insert a todo..." />
      <button type="submit" className="submit-todo-button-container">
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </form>
  );
}
