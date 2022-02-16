import React from 'react';
import '../css/NavMenu.css';
import { Routes, Route } from 'react-router-dom';
import AboutApp from './AboutApp';
import AboutAuthor from './AboutAuthor';
import Home from './Homepage';

export default function NavBar() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="aboutApp" element={<AboutApp />} />
      <Route path="aboutAuthor" element={<AboutAuthor />} />
    </Routes>
  );
}
