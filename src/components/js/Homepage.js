import React, { useState } from 'react';
import Form from './Form';
import '../css/Homepage.css';
import Todos from './Todos';
import NavLinks from './NavLinks';
import { getLocStorage, setLocStorage } from './StorageManager';

export default function Home() {
  const [todo, setTodo] = useState('');
  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (todo) {
      const form = event.target;
      const obj = { id: new Date().getTime().toString(), title: todo, completed: false };
      const locStorage = getLocStorage();
      locStorage.push(obj);
      console.log(locStorage);
      setLocStorage(locStorage);
      Todos();
      form.reset();
      setTodo('');
    }
  };

  return (
    <>
      <NavLinks />
      <section className="App">
        <h1 className="homepage-title">Welcome to React TodoList!</h1>
        <Form handleChange={handleChange} handleSubmit={handleSubmit} />
        <ul className="todos-container">
          <Todos />
        </ul>
      </section>
    </>
  );
}
