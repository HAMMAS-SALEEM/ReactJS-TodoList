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
      localStorage.setItem('todos', JSON.stringify([...storage, obj]));
      setTodo('');
      form.reset();
    }
  };

  return (
    <>
      <NavLinks />
      <section className="App">
        <h1 className="homepage-title">Welcome to React TodoList!</h1>
        <Form handleChange={handleChange} handleSubmit={handleSubmit} />
        <ul className="todos-container">
          <Todos handleRemove={handleRemove} storage={storage} />
        </ul>
      </section>
    </>
  );
}
