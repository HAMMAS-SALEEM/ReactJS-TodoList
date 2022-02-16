import React from 'react';

export default function Todos() {
  const arr = [{ id: 1, title: 'Get up early', completed: false },
    { id: 2, title: 'Say Fajr Prayer', completed: false },
    { id: 3, title: 'Take Morning Walk', completed: false },
    { id: 4, title: 'Complete remaining project', completed: false }];
  return (
    arr.map((element) => (
      <li key={element.id}>{element.title}</li>
    ))
  );
}
