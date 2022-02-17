import React from 'react';
import '../css/Todos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function Todos(props) {
  const { handleRemove, storage, todoStatus } = props;
  return (
    storage.map((element) => (
      <li className="todo-item" id={element.id} key={element.id}>
        <ul className="todo-item-inner">
          <li>
            <input id={element.id} className="todo-detail todo-checkbox" type="checkbox" onChange={todoStatus} />
            <input className="todo-detail todo-value" type="text" defaultValue={element.title} />
          </li>
          <li className="trash-icon-container">
            <FontAwesomeIcon icon={faTrash} id={element.id} onClick={handleRemove} />
          </li>
        </ul>
        <hr />
      </li>
    ))
  );
}
