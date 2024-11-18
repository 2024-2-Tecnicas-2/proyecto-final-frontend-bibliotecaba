// src/components/NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Asegúrate de que el CSS esté importado

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-item">Inicio</Link>
      <Link to="/colecciones" className="nav-item">Colecciones</Link>
      <Link to="/biblioteca" className="nav-item">Biblioteca</Link>
      <Link to="/acerca" className="nav-item">Acerca de</Link>
    </nav>
  );
};

export default NavBar;
