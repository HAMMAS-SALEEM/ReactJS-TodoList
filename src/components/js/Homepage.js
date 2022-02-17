import React, { useState } from 'react';
import Form from './Form';
import '../css/Homepage.css';
import Todos from './Todos';
import NavLinks from './NavLinks';

export default function Home() {
  const [todo, setTodo] = useState('');
  const [storage, setStorage] = useState(JSON.parse(localStorage.getItem('todos')) ? JSON.parse(localStorage.getItem('todos')) : []);
  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  const handleRemove = (event) => {
    const { id } = event.target.parentNode.parentNode.parentNode.parentNode;
    const updatedStore = storage.filter((element) => element.id.toString() !== id);
    localStorage.setItem('todos', JSON.stringify(updatedStore));
    setStorage(updatedStore);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (todo) {
      const form = event.target;
      const obj = { id: new Date().getTime().toString(), title: todo, completed: false };
      setStorage([...storage, obj]);
      console.log([...storage]);
      localStorage.setItem('todos', JSON.stringify([...storage, obj]));
      setTodo('');
      form.reset();
    }
  };

  const todoStatus = (event) => {
    const { id } = event.target;
    const newStorage = storage.find((item) => item.id === id);
    newStorage.completed = newStorage.completed
      ? newStorage.completed = false
      : newStorage.completed = true;
    storage.map(() => ({
      ...storage,
      ...storage.find((item) => item.id.toString() === newStorage.id.toString()),
    }));
    setStorage(storage);
    localStorage.setItem('todos', JSON.stringify(storage));
  };

  return (
    <>
      <NavLinks />
      <section className="App">
        <h1 className="homepage-title">Welcome to React TodoList!</h1>
        <Form handleChange={handleChange} handleSubmit={handleSubmit} />
        <ul className="todos-container">
          <Todos handleRemove={handleRemove} todoStatus={todoStatus} storage={storage} />
        </ul>
      </section>
    </>
  );
}
