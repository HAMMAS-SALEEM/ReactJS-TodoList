import React from 'react';
import Form from './Form';
import '../css/Homepage.css';

export default function Home() {
  return (
    <section className="App">
      <h1 className="homepage-title">Welcome to React TodoList!</h1>
      <Form />
    </section>
  );
}
