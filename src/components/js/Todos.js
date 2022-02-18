import React from 'react';
import '../css/Todos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function Todos(props) {
  const { handleRemove, storage, todoStatus } = props;
  const editTodo = (e) => {
    e.target.readOnly = false;
  };
  const addReadOnly = (e) => {
    e.target.readOnly = true;
  };
  return (
    storage.map((element) => (
      <li className="todo-item" id={element.id} key={element.id}>
        <ul className="todo-item-inner">
          <li className={`${element.completed ? 'checked' : ''}`}>
            <input className="todo-detail todo-checkbox" type="checkbox" onChange={() => todoStatus(element.id)} checked={element.completed} />
            <input className="todo-detail todo-value" type="text" onBlur={addReadOnly} onClick={editTodo} onChange={(event) => todoStatus(element.id, event.target.value)} defaultValue={element.title} readOnly />
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
