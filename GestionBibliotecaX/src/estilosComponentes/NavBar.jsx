import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-item">Inicio</Link>
      <Link to="/colecciones" className="nav-item">Colecciones</Link>
      <Link to="/biblioteca" className="nav-item">Biblioteca</Link>
      <Link to="/acerca" className="nav-item">Acerca de</Link>
      <Link to="/ListaLibro" className="nav-item">Gestionar libros</Link>
      
      {/* Carrito de compras */}
      <div className="cart">
        <i className="fas fa-shopping-cart"></i>
        <span className="cart-badge">0</span>
      </div>
    </nav>
  );
};

export default NavBar;
