import React from 'react';
import '../css/NavMenu.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function NavLinks() {
  return (
    <header>
      <FontAwesomeIcon icon={faBars} className="bars" />
      <nav className="nav-item-container">
        <Link to="/">Home</Link>
        <Link to="/aboutApp">AboutApp</Link>
        <Link to="/aboutAuthor">AboutAuthor</Link>
      </nav>
    </header>
  );
}
