// src/components/NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Inicio</Link>
      <Link to="/colecciones" className="nav-link">Colecciones</Link>
      <Link to="/biblioteca" className="nav-link">Biblioteca</Link>
      <Link to="/acerca" className="nav-link">Acerca de</Link>
    </nav>
  );
};

export default NavBar;
