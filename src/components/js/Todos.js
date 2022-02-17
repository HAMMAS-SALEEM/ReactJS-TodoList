import React from 'react';
import PropTypes from 'prop-types';
import '../css/Todos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { getLocStorage } from './StorageManager';

export default function Todos(props) {
  const storage = getLocStorage();
  const { handleRemove } = props;
  return (
    storage.map((element) => (
      <li className="todo-item" key={element.id}>
        <ul className="todo-item-inner">
          <li>
            <input className="todo-detail todo-checkbox" type="checkbox" />
            <input className="todo-detail todo-value" type="text" defaultValue={element.title} />
          </li>
          <li className="trash-icon-container">
            <FontAwesomeIcon icon={faTrash} onClick={handleRemove} />
          </li>
        </ul>
        <hr />
      </li>
    ))
  );
}

Todos.propTypes = {
  handleRemove: PropTypes.func.isRequired,
};
