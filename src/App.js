import * as React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import AboutApp from './components/js/AboutApp';
import AboutAuthor from './components/js/AboutAuthor';
import Home from './components/js/Homepage';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="aboutApp" element={<AboutApp />} />
        <Route path="aboutAuthor" element={<AboutAuthor />} />
      </Routes>
    </>
  );
}
