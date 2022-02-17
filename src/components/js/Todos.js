import React from 'react';
import '../css/Todos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function Todos() {
  const arr = [{ id: 1, title: 'Get up early', completed: false },
    { id: 2, title: 'Say Fajr Prayer', completed: false },
    { id: 3, title: 'Take Morning Walk', completed: false },
    { id: 4, title: 'Complete remaining project', completed: false }];
  return (
    arr.map((element) => (
      <li className="todo-item" key={element.id}>
        <ul className="todo-item-inner">
          <li>
            <input className="todo-detail todo-checkbox" type="checkbox" />
            <input className="todo-detail todo-value" type="text" defaultValue={element.title} />
          </li>
          <li className="trash-icon-container">
            <FontAwesomeIcon icon={faTrash} />
          </li>
        </ul>
        <hr />
      </li>
    ))
  );
}
